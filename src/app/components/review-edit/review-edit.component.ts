import { Component } from '@angular/core';
import {ReviewFormComponent} from "../review-form/review-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Review} from "../../models/review";
import {Restaurant} from "../../models/restaurant";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-review-edit',
  standalone: true,
  imports: [
    ReviewFormComponent
  ],
  templateUrl: './review-edit.component.html',
  styleUrl: './review-edit.component.css'
})
export class ReviewEditComponent {

  review!: Review;
  restaurants!: Restaurant[];

  constructor(private dataService : DataService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.restaurants = this.route.snapshot.data['restaurants'];
    this.review = this.route.snapshot.data['review'];
  }

  saveReview(data) {
    this.dataService.updateReview(data);
    this.router.navigate([`/restaurants/${data.restaurant.id}/reviews`]);
  }

}
