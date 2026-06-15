import {
  Component
} from '@angular/core';

import {
  MyTabComponent
} from './my-tab.component';

@Component({
    selector: 'app-root-route-index',
    templateUrl: './index.component.html',
    standalone: true,
    imports: [MyTabComponent]
})
export class RootRouteIndexComponent { }
