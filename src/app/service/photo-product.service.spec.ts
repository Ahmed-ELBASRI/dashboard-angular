import { TestBed } from '@angular/core/testing';

import {PhotoProductServiceService} from './photo-product.service';

describe('PhotoProductService', () => {
  let service: PhotoProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
