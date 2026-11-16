import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SkyI18nModule]
})
export class NotFoundComponent { }
