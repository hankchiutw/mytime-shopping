import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceItem } from '../types';

@Component({
  selector: 'app-service-item-edit-modal',
  standalone: true,
  imports: [ButtonModule, InputTextModule, InputNumberModule, FormsModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="formGroup">
      <div>
        <label for="name">Name</label>
        <input pInputText id="name" formControlName="name" />
      </div>
      <div>
        <label for="price">Price</label>
        <p-inputNumber inputId="integeronly" id="price" formControlName="price" />
      </div>
      <div>
        <p-button (click)="onClickCancel()" label="Cancel" />
        <p-button (click)="onClickOk()" label="OK" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModalComponent {
  formGroup = this.fb.group({
    id: [-1],
    name: [''],
    description: [''],
    price: [0],
    inCartCount: [0],
  });

  private get item(): ServiceItem {
    return this.instance?.data?.item;
  }

  private instance?: DynamicDialogComponent;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private dialogService: DialogService
  ) {
    this.instance = this.dialogService.getInstance(this.ref);
  }

  ngOnInit() {
    if (this.item) {
      this.formGroup.setValue(this.item);
    }
  }

  onClickCancel() {
    this.ref.close();
  }
  onClickOk() {
    this.ref.close(this.formGroup.value);
  }
}
