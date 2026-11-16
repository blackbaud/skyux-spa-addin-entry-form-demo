import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  MyTabComponent
} from './my-tab.component';

@Component({
    selector: 'app-root-route-index',
    templateUrl: './index.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MyTabComponent]
})
export class RootRouteIndexComponent { }
