import { TestBed } from '@angular/core/testing';

import { RepoHttpService } from './repo-http.service';

describe('RepoHttpService', () => {
  let service: RepoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
