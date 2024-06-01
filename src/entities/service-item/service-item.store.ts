import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, removeEntity, updateEntity, withEntities } from '@ngrx/signals/entities';

import { ServiceItem } from './types';

export const ServiceItemStore = signalStore(
  { providedIn: 'root' },
  withEntities<ServiceItem>(),
  withMethods((store) => ({
    addItem(item: ServiceItem) {
      item.id = Date.now();
      item.inCartCount = 0;
      patchState(store, addEntity(item));
    },
    updateItem(item: ServiceItem) {
      patchState(store, updateEntity({ id: item.id, changes: item }));
    },
    removeItem(id: ServiceItem['id']) {
      patchState(store, removeEntity(id));
    },
    updateInCartCount(id: ServiceItem['id'], count: number) {
      const inCartCount = Math.max(count, 0);
      patchState(store, updateEntity({ id, changes: { inCartCount } }));
    },
  }))
);
