import { ServiceItemAddButton, ServiceItemEditableList } from 'Features/service-item-editting';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceItemAddButton, ServiceItemEditableList],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
