import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReviewFormComponent} from "../review-form/review-form.component";
import {Restaurant} from "../../models/restaurant";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-review-new',
  standalone: true,
  imports: [
    ReviewFormComponent
  ],
  templateUrl: './review-new.component.html',
  styleUrl: './review-new.component.css'
})
export class ReviewNewComponent {
  review;
  restaurants!: Restaurant[];

  constructor(private dataService : DataService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.restaurants = this.route.snapshot.data['restaurants'];
    this.review = {};
    this.review.restaurant = this.restaurants[0];
  }

  saveReview(data) {
    this.dataService.createReview(data);
    this.router.navigate([`/restaurants/${data.restaurant.id}/reviews`]);
  }

}
