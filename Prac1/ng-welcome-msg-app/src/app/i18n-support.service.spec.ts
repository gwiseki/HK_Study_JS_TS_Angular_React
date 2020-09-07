import { TestBed } from '@angular/core/testing';

import { I18nSupportService } from './i18n-support.service';

describe('I18nSupportService', () => {
  let service: I18nSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
