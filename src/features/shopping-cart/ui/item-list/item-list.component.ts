import { ServiceItem, ServiceItemSimpleView, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item-list',
  standalone: true,
  imports: [DataViewModule, ServiceItemSimpleView, ButtonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  private store = inject(ServiceItemStore);

  get serviceItems() {
    return this.store.entities().filter(({ inCartCount }) => inCartCount > 0);
  }

  onClickPlus(item: ServiceItem) {
    this.store.updateInCartCount(item.id, item.inCartCount + 1);
  }

  onClickMinus(item: ServiceItem) {
    this.store.updateInCartCount(item.id, item.inCartCount - 1);
  }
}
