import { TestBed, inject } from '@angular/core/testing';

import { DataGridListService } from './data-grid-list.service';

describe('DataGridListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGridListService]
    });
  });

  it('should be created', inject([DataGridListService], (service: DataGridListService) => {
    expect(service).toBeTruthy();
  }));
});
