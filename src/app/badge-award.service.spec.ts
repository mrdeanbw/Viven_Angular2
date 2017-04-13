import { TestBed, inject } from '@angular/core/testing';

import { BadgeAwardService } from './badge-award.service';

describe('BadgeAwardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadgeAwardService]
    });
  });

  it('should ...', inject([BadgeAwardService], (service: BadgeAwardService) => {
    expect(service).toBeTruthy();
  }));
});
