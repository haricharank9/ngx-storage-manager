import { Injectable } from '@angular/core';
import { INgxStorageService } from './INgxStorageService';
import { NgxStorageManagerConfig } from './storage-manager-config';

@Injectable()
export class NgxStorageManagerService implements INgxStorageService {
  private _excludedKeys: string[];
  public get excludedKeys(): string[] {
    return this._excludedKeys;
  }
  public set excludedKeys(value: string[]) {
    this._excludedKeys = value;
  }
  constructor(private storageManagerConfig: NgxStorageManagerConfig) {
    this.excludedKeys = storageManagerConfig.excludedKeys;
  }

  setStorageItem(key: string, value: any, storage: Storage = localStorage) {
    storage.setItem(key, btoa(JSON.stringify(value)));
  }
  getStorageItem = (key: string, storage: Storage = localStorage): any => {
    let token: string;
    try {
      token = atob(storage.getItem(key) || '');
    } catch (error) {
      this.setStorageItem(key, {}, storage);
    }
    return JSON.parse(token || '""');
  };

  removeStorageItem = (key: string, storage: Storage = localStorage) => {
    storage.removeItem(key);
  };

  removeStorageItems = (keys: string[], storage: Storage = localStorage) => {
    keys.forEach((key) => storage.removeItem(key));
  };

  clearStorage(storage: Storage = localStorage): void {
    storage.clear();
  }

  patchStorageItem(
    key: string,
    value: {},
    storage: Storage = localStorage
  ): void {
    const patchedValue = { ...value, ...this.getStorageItem(key) };
    this.setStorageItem(key, patchedValue, storage);
  }

  excludedClear(storage: Storage = localStorage): void {
    let excludedPairs: { [name: string]: any } = {};
    if (this.excludedKeys && this.excludedKeys.length) {
      this.excludedKeys.forEach((key) => {
        excludedPairs = {
          ...excludedPairs,
          [key]: this.getStorageItem(key, storage),
        };
      });
    }
    storage.clear();
    if (excludedPairs) {
      Object.keys(excludedPairs).forEach((key) => {
        this.setStorageItem(key, excludedPairs[key], storage);
      });
    }
  }
}
