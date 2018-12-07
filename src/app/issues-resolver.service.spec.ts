import { TestBed } from '@angular/core/testing';

import { IssuesResolverService } from './issues-resolver.service';

describe('IssuesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssuesResolverService = TestBed.get(IssuesResolverService);
    expect(service).toBeTruthy();
  });
});
