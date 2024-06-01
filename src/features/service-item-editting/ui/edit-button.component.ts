import { ServiceItem, ServiceItemEditModal, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-edit-button',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  template: `<p-button (click)="onClickEdit()" label="Edit"></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditButtonComponent {
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
}
