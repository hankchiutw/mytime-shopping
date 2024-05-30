import { signalStore } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

import { ServiceItem } from './types';

export const ServiceItemStore = signalStore(withEntities<ServiceItem>());
