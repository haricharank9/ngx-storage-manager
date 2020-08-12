import { TestBed } from '@angular/core/testing';

import { NgxStorageManagerService } from './ngx-storage-manager.service';

describe('NgxStorageManagerService', () => {
  let service: NgxStorageManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStorageManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
