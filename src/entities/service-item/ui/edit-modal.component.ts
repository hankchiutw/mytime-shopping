import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-item-edit-modal',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="formGroup">
      <div>
        <label for="name">Name</label>
        <input pInputText id="name" formControlName="name" />
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
    name: [''],
  });

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef
  ) {}

  onClickCancel() {
    this.ref.close();
  }
  onClickOk() {
    this.ref.close(this.formGroup.value);
  }
}
