import { ServiceItemSimpleView, ServiceItemStore } from 'Entities/service-item';
import { DataViewModule } from 'primeng/dataview';

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ActionMenuComponent } from '../action-menu/action-menu.component';

@Component({
  selector: 'app-service-item-editable-list',
  standalone: true,
  imports: [DataViewModule, ServiceItemSimpleView, ActionMenuComponent],
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
