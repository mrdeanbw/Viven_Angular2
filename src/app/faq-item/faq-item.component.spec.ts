import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqItemComponent } from './faq-item.component';

describe('FaqItemComponent', () => {
  let component: FaqItemComponent;
  let fixture: ComponentFixture<FaqItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
