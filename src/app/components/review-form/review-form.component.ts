import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/models/review';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.sass']
})
export class ReviewFormComponent implements OnInit {

  @Input() review: Review;
  @Input() restaurants: Restaurant[];

  @Output() onSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSubmit.emit(this.review);
  }

}
