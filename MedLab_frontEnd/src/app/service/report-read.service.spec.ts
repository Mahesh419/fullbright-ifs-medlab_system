import { TestBed, inject } from '@angular/core/testing';

import { ReportReadService } from './report-read.service';

describe('ReportReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportReadService]
    });
  });

  it('should be created', inject([ReportReadService], (service: ReportReadService) => {
    expect(service).toBeTruthy();
  }));
});
