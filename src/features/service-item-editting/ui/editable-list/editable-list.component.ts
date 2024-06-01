import { ServiceItem, ServiceItemSimpleView, ServiceItemStore } from 'Entities/service-item';
import { DataViewModule } from 'primeng/dataview';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { EditButtonComponent } from '../edit-button.component';
import { RemoveButtonComponent } from '../remove-button.component';
import { SelectButtonComponent } from '../select-button.component';

@Component({
  selector: 'app-service-item-editable-list',
  standalone: true,
  imports: [
    DataViewModule,
    ServiceItemSimpleView,
    EditButtonComponent,
    SelectButtonComponent,
    RemoveButtonComponent,
  ],
  templateUrl: './editable-list.component.html',
  styleUrl: './editable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableListComponent {
  private store = inject(ServiceItemStore);

  get serviceItems() {
    return this.store.entities();
  }
}
