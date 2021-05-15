import { TestBed } from '@angular/core/testing';

import { StimuliService } from './stimuli.service';

describe('StimuliService', () => {
  let service: StimuliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StimuliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
