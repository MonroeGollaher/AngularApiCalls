import { TestBed } from '@angular/core/testing';

import { FakedbService } from './fakedb.service';

describe('FakedbService', () => {
  let service: FakedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
