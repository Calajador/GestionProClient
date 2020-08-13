import { TestBed } from '@angular/core/testing';

import { WebReqService } from './web-req.service';

describe('WebReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebReqService = TestBed.get(WebReqService);
    expect(service).toBeTruthy();
  });
});
