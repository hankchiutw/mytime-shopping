import { ServiceItem } from 'Entities/service-item';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item-simple-view',
  standalone: true,
  imports: [],
  template: `
    <div class="mb-2">
      <div>
        <span>Name: </span><span>{{ item?.name }}</span>
      </div>
      <div>
        <span>Description: </span><span>{{ item?.description }}</span>
      </div>
      <div>
        <span>Price: </span><span>{{ item?.price }}</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleViewComponent {
  @Input() item?: ServiceItem;
}
