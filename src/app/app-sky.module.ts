import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyNumericModule
} from '@skyux/core';

import {
  SkyDatePipeModule
} from '@skyux/datetime';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyWaitModule
} from '@skyux/indicators';

import {
  SkyDefinitionListModule,
  SkyPageSummaryModule
} from '@skyux/layout';

import {
  SkyConfirmModule
} from '@skyux/modals';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyConfirmModule,
    SkyDatePipeModule,
    SkyDefinitionListModule,
    SkyI18nModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyNumericModule,
    SkyPageSummaryModule,
    SkyWaitModule
  ]
})
export class AppSkyModule { }
