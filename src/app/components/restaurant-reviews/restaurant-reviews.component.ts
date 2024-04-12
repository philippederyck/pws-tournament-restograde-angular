import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Restaurant} from "../../models/restaurant";
import {Review} from "../../models/review";

@Component({
  selector: 'app-restaurant-reviews',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './restaurant-reviews.component.html',
  styleUrl: './restaurant-reviews.component.css'
})
export class RestaurantReviewsComponent {
  reviews!: Review[];
  restaurant!: Restaurant;

  constructor(private route: ActivatedRoute, private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.restaurant = this.route.snapshot.data['restaurant'];
    this.reviews = this.route.snapshot.data['reviews'];
  }

  safeValue(input) {
    return this.sanitizer.bypassSecurityTrustHtml(input);
  }
}
