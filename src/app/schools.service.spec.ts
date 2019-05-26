import { TestBed } from '@angular/core/testing';

import { SchoolsService } from './school.service';

describe('SchoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolsService = TestBed.get(SchoolsService);
    expect(service).toBeTruthy();
  });
});
