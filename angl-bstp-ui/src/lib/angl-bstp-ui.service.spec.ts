import { TestBed } from '@angular/core/testing';

import { AnglBstpUIService } from './angl-bstp-ui.service';

describe('AnglBstpUIService', () => {
  let service: AnglBstpUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnglBstpUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
