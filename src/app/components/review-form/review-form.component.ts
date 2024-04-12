import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Review} from "../../models/review";
import {Restaurant} from "../../models/restaurant";

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {
  @Input() review!: Review;
  @Input() restaurants!: Restaurant[];

  @Output() onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSubmit.emit(this.review);
  }

}
