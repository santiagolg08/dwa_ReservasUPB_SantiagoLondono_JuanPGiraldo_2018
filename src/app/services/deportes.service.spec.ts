import { TestBed, inject } from '@angular/core/testing';

import { DeportesService } from './deportes.service';

describe('DeportesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeportesService]
    });
  });

  it('should be created', inject([DeportesService], (service: DeportesService) => {
    expect(service).toBeTruthy();
  }));
});
