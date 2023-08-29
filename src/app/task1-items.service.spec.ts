import { TestBed } from '@angular/core/testing';

import { Task1ItemsService } from './task1-items.service';

describe('Task1ItemsService', () => {
  let service: Task1ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task1ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
