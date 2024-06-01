import { ServiceItem, ServiceItemEditModal, ServiceItemStore } from 'Entities/service-item';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-add-button',
  standalone: true,
  imports: [ButtonModule],
  providers: [DialogService],
  template: `<p-button (click)="onClickAdd()" label="Add"></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonComponent {
  private ref: DynamicDialogRef | undefined;
  private store = inject(ServiceItemStore);

  constructor(private dialogService: DialogService) {}

  onClickAdd() {
    this.ref = this.dialogService.open(ServiceItemEditModal, {
      header: 'Add a Service Item',
    });

    this.ref.onClose.subscribe((data?: ServiceItem) => {
      data && this.store.addItem(data);
    });
  }
}
