# NgxStorageManager

Angular library for performing operations on local or session storage of browser typically with any kind of data.

**API**

```typescript
/**
 *All the methods have storage parameter as an optional parameter.
 *It's default to localStorage
 */

//For setting item in storage
   setStorageItem(key: string, value: any, storage?: Storage): void;
//For reading values from storage
   getStorageItem(key: string, storage?: Storage): any;
//For removing the item from storage
   removeStorageItem(key: string, storage?: Storage): void;
//For removing multiple items from storage
   removeStorageItems(keys: string[], storage?: Storage):void;
//For clearing the entire storage
   clearStorage(storage?: Storage): void;
//For patching/updating the value to existing object
   patchStorageItem(key: string, value: {}, storage?: Storage): void;
//Clears the storage excluding the keys mentioned in config.
   excludedClear(storage?: Storage): void;
```

**Usage**

Configure in your AppModule.ts imports

```typescript
import { StorageManagerModule } from "ngx-storage-manager";

@NgModule({
  imports: [
    NgxStorageManagerModule.forRoot({
      excludedKeys: [] //strings of excluded keys when calling excludedClear
    })
  ]
```

Inject `INgxStorageManagerService` wherever you wanna make use of API.

```typescript
import { INgxStorageManagerService } from "ngx-storage-manager";

export class AppComponent implements OnInit {
  constructor(private storage: INgxStorageManagerService) {}
}
```
