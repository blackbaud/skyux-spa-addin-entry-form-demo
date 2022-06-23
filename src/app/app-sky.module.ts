import {
  NgModule
} from '@angular/core';

import {
  SkyNumericModule
} from '@skyux/core';

import {
  SkyDatePipeModule
} from '@skyux/datetime';

import {
  SkyDefinitionListModule
} from '@skyux/layout';

/**
 * @deprecated Each SKY UX module should be imported into each feature module
 * that references the SKY UX module, and this module should be removed.
 */
@NgModule({
  exports: [
    SkyDatePipeModule,
    SkyDefinitionListModule,
    SkyNumericModule
  ]
})
export class AppSkyModule { }
