import { TestBed } from '@angular/core/testing';

import { SpringclientService } from './springclient.service';

describe('SpringclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringclientService = TestBed.get(SpringclientService);
    expect(service).toBeTruthy();
  });
});
