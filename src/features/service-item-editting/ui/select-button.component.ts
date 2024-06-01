import { ServiceItem, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';

import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-select-button',
  standalone: true,
  imports: [ButtonModule],
  template: `<p-button (click)="onClickSelect()" label="Select"></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonComponent {
  @Input() item?: ServiceItem;

  private store = inject(ServiceItemStore);

  onClickSelect() {
    if (!this.item || this.item.inCartCount > 0) return;
    this.store.updateInCartCount(this.item.id, 1);
  }
}
