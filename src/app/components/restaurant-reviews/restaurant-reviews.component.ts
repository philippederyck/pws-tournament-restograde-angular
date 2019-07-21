import { Component, OnInit } from '@angular/core';
import { Review } from '../..//models/review';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../..//models/restaurant';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss']
})
export class RestaurantReviewsComponent implements OnInit {

  reviews : Review[];
  restaurant : Restaurant;
  
  constructor(private route: ActivatedRoute, private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.restaurant = this.route.snapshot.data['restaurant'];
    this.reviews = this.route.snapshot.data['reviews'];
  }

  safeValue(input) {
    return this.sanitizer.bypassSecurityTrustHtml(input);
  }

}
