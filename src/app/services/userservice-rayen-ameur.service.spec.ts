import { TestBed } from '@angular/core/testing';

import { UserserviceRayenAmeurService } from './userservice-rayen-ameur.service';

describe('UserserviceRayenAmeurService', () => {
  let service: UserserviceRayenAmeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviceRayenAmeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
