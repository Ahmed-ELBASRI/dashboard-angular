import { TestBed } from '@angular/core/testing';

import { AttPoductServiceService } from './att-poduct-service.service';

describe('AttPoductServiceService', () => {
  let service: AttPoductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttPoductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
