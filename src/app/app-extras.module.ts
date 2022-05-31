import {
  NgModule
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AppSkyModule
} from './app-sky.module';

import {
  EntryFormService
} from './shared/services/entry-form.service';

/**
 * @deprecated Provided services, imported modules, etc. should be moved to
 * their respective feature modules, and this module should be removed.
 */
@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [
    AddinClientService,
    EntryFormService
  ]
})
export class AppExtrasModule { }
