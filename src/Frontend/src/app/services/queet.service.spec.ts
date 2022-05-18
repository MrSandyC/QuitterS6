import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { QueetService } from './queet.service';

describe('QueetServiceService', () => {
  let service: QueetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(QueetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
