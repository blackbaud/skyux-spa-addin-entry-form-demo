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

@NgModule({
  exports: [
    SkyDatePipeModule,
    SkyDefinitionListModule,
    SkyNumericModule
  ]
})
export class AppSkyModule { }
