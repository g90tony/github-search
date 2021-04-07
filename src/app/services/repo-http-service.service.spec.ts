import { TestBed } from '@angular/core/testing';

import { RepoHttpServiceService } from './repo-http-service.service';

describe('RepoHttpServiceService', () => {
  let service: RepoHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
