import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.scss']
})
export class ReviewNewComponent implements OnInit {

  review;
  restaurants : Restaurant[];
  
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
