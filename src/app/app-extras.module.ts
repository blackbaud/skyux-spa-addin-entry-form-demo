import {
  NgModule
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

import {
  EntryFormService
} from './shared/services/entry-form.service';

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
