import { effect } from '@angular/core';
import { patchState, signalStoreFeature, withHooks } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';

import { ServiceItem } from '../types';

const STORAGE_KEY = '$$ServiceItemEntities';

function save(data: ServiceItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function load(): ServiceItem[] {
  const itemsStr = window.localStorage.getItem(STORAGE_KEY);
  return itemsStr ? JSON.parse(itemsStr) : [];
}

export function withPersistentStorage() {
  return signalStoreFeature(
    withEntities<ServiceItem>(),
    withHooks({
      onInit(store) {
        patchState(store, setAllEntities(load()));
        effect(() => {
          save(store.entities());
        });
      },
      onDestroy(store) {
        save(store.entities());
      },
    })
  );
}
