import { TestBed, inject } from '@angular/core/testing';

import { Auth.GardService } from './auth.gard.service';

describe('Auth.GardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.GardService]
    });
  });

  it('should be created', inject([Auth.GardService], (service: Auth.GardService) => {
    expect(service).toBeTruthy();
  }));
});
