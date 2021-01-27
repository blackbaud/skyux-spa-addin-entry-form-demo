import {
  Injectable
} from '@angular/core';

import {
  Observable,
  of
} from 'rxjs';

import {
  concatMap,
  delay
} from 'rxjs/operators';

import {
  GiftFormData
} from '../interfaces/gift-form-data';

import {
  GiftSaveData
} from '../interfaces/gift-save-data';

@Injectable()
export class EntryFormService {
  private readonly delayInMilliseconds: number = 1000;

  constructor() {
  }

  // Returns true after 3 seconds
  public saveRecord(saveData: GiftSaveData, formData: GiftFormData): Observable<boolean> {
    return of(true).pipe(
      concatMap(item => of(item).pipe(
        delay(this.delayInMilliseconds)
      ))
    );
  }

  // Returns true after 3 seconds
  public logCancel(): Observable<boolean> {
    return of(true).pipe(
      concatMap(item => of(item).pipe(
        delay(this.delayInMilliseconds)
      ))
    );
  }

}
