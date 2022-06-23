import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyAppAssetsService
} from '@skyux/assets';

import {
  MyTabComponent
} from './my-tab.component';

import {
  RootRouteIndexComponent
} from './index.component';

import {
  NotFoundComponent
} from './not-found.component';

import {
  AppExtrasModule
} from './app-extras.module';

/**
 * @deprecated This module was migrated from SKY UX Builder v.4.
 * It is highly recommended that this module be factored-out into separate, lazy-loaded feature modules.
 */
@NgModule({
  imports: [
    AppExtrasModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SkyAppLinkModule,
    SkyI18nModule
  ],
  declarations: [
    MyTabComponent,
    NotFoundComponent,
    RootRouteIndexComponent
  ],
  exports: [
    AppExtrasModule,
    MyTabComponent,
    NotFoundComponent,
    RootRouteIndexComponent
  ],
  providers: [
    // This provider is to support the legacy SKY UX asset and i18n
    // functionality. You should refactor your application to use Angular's
    // built-in asset handling and i18n processes instead.
    // https://angular.io/guide/file-structure#application-project-files
    // https://angular.io/guide/i18n-overview
    {
      provide: SkyAppAssetsService,
      useValue: {
        getUrl(path: string) {
          return '/assets/' + path;
        },
        getAllUrls() {
          return undefined;
        }
      }
    }
  ]
})
export class SkyPagesModule { }
