import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNewComponent } from './review-new.component';

describe('ReviewNewComponent', () => {
  let component: ReviewNewComponent;
  let fixture: ComponentFixture<ReviewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
