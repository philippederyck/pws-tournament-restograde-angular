import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss']
})
export class ReviewEditComponent implements OnInit {

  review : Review;
  restaurants : Restaurant[];
  
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
