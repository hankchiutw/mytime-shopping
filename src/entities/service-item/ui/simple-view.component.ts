import { ServiceItem } from 'Entities/service-item';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item-simple-view',
  standalone: true,
  imports: [],
  template: `
    <div>
      <span>Name: </span><span>{{ item?.name }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleViewComponent {
  @Input() item?: ServiceItem;
}
