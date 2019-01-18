import { TestBed, inject } from '@angular/core/testing';

import { AuthGardService } from './auth.gard.service';

describe('Auth.GardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGardService]
    });
  });

  it('should be created', inject([AuthGardService], (service: AuthGardService) => {
    expect(service).toBeTruthy();
  }));
});
