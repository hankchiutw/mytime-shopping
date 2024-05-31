import { ServiceItemSimpleView, ServiceItemStore } from 'Entities/service-item';
import { DataViewModule } from 'primeng/dataview';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-service-item-editable-list',
  standalone: true,
  imports: [DataViewModule, ServiceItemSimpleView],
  templateUrl: './editable-list.component.html',
  styleUrl: './editable-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableListComponent {
  store = inject(ServiceItemStore);

  get serviceItems() {
    return this.store.entities();
  }
}
