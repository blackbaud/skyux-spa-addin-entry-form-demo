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
  takeUntil
} from 'rxjs/operators';

import {
  GiftFormData
} from '../shared/interfaces/gift-form-data';

import {
  GiftSaveData
} from '../shared/interfaces/gift-save-data';

import {
  EntryFormService
} from '../shared/services/entry-form.service';

@Component({
  selector: 'my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.scss']
})
export class MyTabComponent implements OnInit, OnDestroy {
  public environmentId: string;
  public formData: GiftFormData;
  public saveData: GiftSaveData;
  private destroy: Subject<any>;

  constructor(
    private addinClientService: AddinClientService,
    private entryFormService: EntryFormService
  ) {
    this.destroy = new Subject();
  }

  public ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public ngOnInit() {

    // subscribe to the the add in args
    this.addinClientService.args.pipe(
      takeUntil(this.destroy)
    ).subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;

      // initialize the tab
      args.ready({
        showUI: true,
        title: `My entry form Add-in tab`
      });
    });

    // add event for the form data being updated
    this.addinClientService.addEventHandler('form-data-update').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-data-update event: ', addinEvent.context);

      // store the giving form data for display
      this.formData = addinEvent.context as GiftFormData;
    });

    // add the event for the gift form being saved
    this.addinClientService.addEventHandler('form-save').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-save event: ', addinEvent.context);

      // store the save data for display
      this.saveData = addinEvent.context;

      // mock calling a service to save the information
      this.entryFormService.saveRecord(this.saveData, this.formData).subscribe(() => {
        console.log('client save form data successfully!');

        // we need to let the parent modal know that we are done and it can close
        addinEvent.done();
      });
    });

    // add the event handler for the gift form being canceled
    this.addinClientService.addEventHandler('form-cancel').addinEvent.pipe(
      takeUntil(this.destroy)
    ).subscribe(addinEvent => {
      console.log('client received form-cancel event');

      // mock calling a service to save the information about the cancel
      this.entryFormService.logCancel().subscribe(() => {
        console.log('client logged cancel successfully!');

        // we need to let the parent modal know that we are done and it can close
        addinEvent.done();
      });
    });
  }
}
