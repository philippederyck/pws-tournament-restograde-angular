import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNewComponent } from './review-new.component';

describe('ReviewNewComponent', () => {
  let component: ReviewNewComponent;
  let fixture: ComponentFixture<ReviewNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
