import { ServiceItem, ServiceItemSimpleView, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item-list',
  standalone: true,
  imports: [DataViewModule, ServiceItemSimpleView, ButtonModule, PanelModule, ButtonGroupModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  private store = inject(ServiceItemStore);

  serviceItems = computed(() => this.store.entities().filter(({ inCartCount }) => inCartCount > 0));

  totalPrice = computed(() =>
    this.serviceItems().reduce((sum, item) => (sum += item.price * item.inCartCount), 0)
  );

  onClickPlus(item: ServiceItem) {
    this.store.updateInCartCount(item.id, item.inCartCount + 1);
  }

  onClickMinus(item: ServiceItem) {
    this.store.updateInCartCount(item.id, item.inCartCount - 1);
  }
}
