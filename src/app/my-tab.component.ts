import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs
} from '@blackbaud/sky-addin-client';

import {
  Subject
} from 'rxjs';

import {
  takeUntil,
  finalize
} from 'rxjs/operators';

import {
  GiftFormData
} from './shared/interfaces/gift-form-data';

import {
  GiftSaveData
} from './shared/interfaces/gift-save-data';

import {
  EntryFormService
} from './shared/services/entry-form.service';

@Component({
    selector: 'app-my-tab',
    templateUrl: './my-tab.component.html',
    styleUrls: ['./my-tab.component.scss'],
    standalone: false
})
export class MyTabComponent implements OnInit, OnDestroy {
  public environmentId: string | undefined;
  public formData!: GiftFormData;
  public saveData!: GiftSaveData;
  private destroy: Subject<void>;

  constructor(
    private addinClientService: AddinClientService,
    private entryFormService: EntryFormService
  ) {
    this.destroy = new Subject<void>();
  }

  public ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public ngOnInit() {
    // initialization of the add in client
    this.initializeAddInClient();

    // handle the update events triggered from the gift form through the add in client
    this.handleGiftFormUpdateEvent();

    // handle the cancel event triggered from the gift form through the add in client
    this.handleGiftFormCancelEvent();

    // handle the save event triggered from the gift form through the add in client
    this.handleGiftFormSaveEvent();
  }

  private initializeAddInClient(): void {
    // subscribe to the the add in args
    this.addinClientService.args.pipe(
      takeUntil(this.destroy)
    ).subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;

      // initialize the tab
      args.ready({
        showUI: true,
        title: `Entry form demo`
      });
    });
  }

  private handleGiftFormUpdateEvent(): void {
    // add event for the form data being updated
    this.addinClientService.addEventHandler('form-data-update').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-data-update event: ', addinEvent.context);

      // store the giving form data for display
      this.formData = addinEvent.context as GiftFormData;
    });
  }

  private handleGiftFormCancelEvent(): void {
    // add the event handler for the gift form being canceled
    // this event is not intended to interact with the user
    // it is intended to allow for a third party to do something non-UI related
    this.addinClientService.addEventHandler('form-cancel').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-cancel event');

      // mock calling a service to save the information about the cancel
      this.entryFormService.logCancel().pipe(
        finalize(() => {
          // always be sure to call done on this event to make sure the entry form is not blocked
          addinEvent.done?.();
        })
      ).subscribe(() => {
        console.log('client logged cancel successfully!');
      });
    });
  }

  private handleGiftFormSaveEvent(): void {
    // add the event for the gift form being saved
    // this event is not intended to interact with the user
    // it is intended to allow for a third party to do something non-UI related
    this.addinClientService.addEventHandler('form-save').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-save event: ', addinEvent.context);

      // store the save data for display
      this.saveData = addinEvent.context;

      // mock calling a service to save the information
      this.entryFormService.saveRecord(this.saveData, this.formData).pipe(
        finalize(() => {
          // always be sure to call done on this event to make sure the entry form is not blocked
          addinEvent.done?.();
        })
      ).subscribe(() => {
        console.log('client save form data successfully!');
      });
    });
  }
}
