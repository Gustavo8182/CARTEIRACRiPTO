/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CryptoPriceService } from './cryptoPrice.service';

describe('Service: CryptoPrice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoPriceService]
    });
  });

  it('should ...', inject([CryptoPriceService], (service: CryptoPriceService) => {
    expect(service).toBeTruthy();
  }));
});
