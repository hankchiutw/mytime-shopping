import { ServiceItem, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';

import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-remove-button',
  standalone: true,
  imports: [ButtonModule],
  template: `<p-button (click)="onClickRemove()" label="Remove"></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveButtonComponent {
  @Input() item?: ServiceItem;

  private store = inject(ServiceItemStore);

  onClickRemove() {
    this.item && this.store.removeItem(this.item.id);
  }
}
