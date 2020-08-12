import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { INgxStorageManagerConfig } from './INgxStorageManagerConfig';
import { INgxStorageService } from './INgxStorageService';
import { NgxStorageManagerService } from './ngx-storage-manager.service';
import { NgxStorageManagerConfig } from './storage-manager-config';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: INgxStorageService, useClass: NgxStorageManagerService },
  ],
})
export class NgxStorageManagerModule {
  static forRoot(options: {
    excludedKeys: string[];
  }): ModuleWithProviders<NgxStorageManagerModule> {
    return {
      ngModule: NgxStorageManagerModule,
      providers: [
        {
          provide: STORAGE_KEY_INJECT_PARAMS,
          useValue: options,
        },
        {
          provide: NgxStorageManagerConfig,
          useFactory: provideMyServiceOptions,
          deps: [STORAGE_KEY_INJECT_PARAMS],
        },
      ],
    };
  }
}

export const STORAGE_KEY_INJECT_PARAMS = new InjectionToken<
  INgxStorageManagerConfig
>('storage key exclusion');

export function provideMyServiceOptions(
  options?: INgxStorageManagerConfig
): {
  excludedKeys: string[];
} {
  let myServiceOptions = new NgxStorageManagerConfig();

  if (options) {
    myServiceOptions = { ...options };
  }

  return myServiceOptions;
}
