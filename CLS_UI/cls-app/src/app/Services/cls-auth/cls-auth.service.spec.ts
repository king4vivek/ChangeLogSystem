import { TestBed } from '@angular/core/testing';

import { ClsAuthService } from './cls-auth.service';

describe('ClsAuthService', () => {
  let service: ClsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
