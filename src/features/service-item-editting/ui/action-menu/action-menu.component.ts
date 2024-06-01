import { ServiceItem, ServiceItemEditModal, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-action-menu',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  templateUrl: './action-menu.component.html',
  styleUrl: './action-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionMenuComponent {
  @Input() item?: ServiceItem;

  private ref: DynamicDialogRef | undefined;
  private store = inject(ServiceItemStore);

  constructor(private dialogService: DialogService) {}

  onClickEdit() {
    this.ref = this.dialogService.open(ServiceItemEditModal, {
      header: 'Edit a Service Item',
      data: { item: this.item },
    });

    this.ref.onClose.subscribe((data?: ServiceItem) => {
      data && this.store.updateItem(data);
    });
  }

  onClickSelect() {
    if (!this.item || this.item.inCartCount > 0) return;
    this.store.updateInCartCount(this.item.id, 1);
  }

  onClickRemove() {
    this.item && this.store.removeItem(this.item.id);
  }
}
