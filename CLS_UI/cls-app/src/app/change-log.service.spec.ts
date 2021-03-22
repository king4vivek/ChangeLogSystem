import { TestBed } from '@angular/core/testing';
import { ChangeLogService } from './change-log.service';

describe('ChangeLogServiceService', () => {
  let service: ChangeLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
