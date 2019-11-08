import { TestBed } from '@angular/core/testing';

import { FinancedataService } from './financedata.service';

describe('FinancedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancedataService = TestBed.get(FinancedataService);
    expect(service).toBeTruthy();
  });
});
