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
    <div [formGroup]="formGroup" class="space-y-2 text-right">
      <div class="space-x-2">
        <label for="name">Name</label>
        <input pInputText id="name" formControlName="name" />
      </div>
      <div class="space-x-2">
        <label for="description">Description</label>
        <input pInputText id="description" formControlName="description" />
      </div>
      <div class="space-x-2">
        <label for="price">Price</label>
        <p-inputNumber inputId="integeronly" id="price" formControlName="price" />
      </div>
    </div>
    <div class="space-x-1 mt-3 text-right">
      <p-button (click)="onClickCancel()" label="Cancel" />
      <p-button (click)="onClickOk()" label="OK" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModalComponent {
  formGroup = this.fb.group({
    id: [-1],
    name: [''],
    description: [''],
    price: [1],
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
