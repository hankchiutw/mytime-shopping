import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ServiceItem } from '../types';
import { EditModalComponent } from './edit-modal.component';

@Component({
  selector: 'app-service-item-add-button',
  standalone: true,
  imports: [ButtonModule, InputTextModule],
  providers: [DialogService],
  template: `<p-button (click)="onClickAdd()" label="Add"></p-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonComponent {
  private ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  onClickAdd() {
    this.ref = this.dialogService.open(EditModalComponent, {
      header: 'Add a Service Item',
    });

    this.ref.onClose.subscribe((data: ServiceItem) => {
      console.log('xxx: added:', data);
    });
  }
}
