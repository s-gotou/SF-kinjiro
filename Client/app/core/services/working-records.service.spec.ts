import { TestBed, inject } from '@angular/core/testing';

import { WorkingRecordsService } from './working-records.service';

describe('WorkingRecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkingRecordsService]
    });
  });

  it('should be created', inject([WorkingRecordsService], (service: WorkingRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
