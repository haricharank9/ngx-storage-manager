import { Injectable } from '@angular/core';

@Injectable()
export abstract class INgxStorageService {
  abstract set excludedKeys(value: string[]);
  abstract setStorageItem(key: string, value: any, storage?: Storage): void;
  abstract getStorageItem(key: string, storage?: Storage): any;
  abstract removeStorageItem(key: string, storage?: Storage): void;
  abstract clearStorage(storage?: Storage): void;
  abstract patchStorageItem(key: string, value: {}, storage?: Storage): void;
  abstract excludedClear(storage?: Storage): void;
  abstract removeStorageItems(keys: string[], storage?: Storage);
}
