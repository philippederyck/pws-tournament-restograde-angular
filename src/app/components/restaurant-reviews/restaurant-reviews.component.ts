import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.sass']
})
export class RestaurantReviewsComponent implements OnInit {

  reviews : Review[];
  restaurant : Restaurant;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurant = this.route.snapshot.data['restaurant'];
    this.reviews = this.route.snapshot.data['reviews'];
  }

}
