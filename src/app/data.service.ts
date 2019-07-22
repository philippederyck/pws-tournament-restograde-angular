import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant';
import { restaurants, reviews } from './data';
import { Review } from './models/review';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getRestaurants() : Restaurant[] {
    return restaurants;
  }

  getRestaurantById(id : number) : Restaurant {
    return restaurants.filter(r => r.id == id)[0];
  }

  getReviewsByRestaurantId(id : number) : Review[] {
    return reviews.filter(r => r.restaurant.id == id);
  }

  getReviewById(id : number) : Review {
    return reviews.filter(r => r.id == id)[0];
  }

  createReview(data) : void {
    let id = Math.max(...reviews.map(r => r.id)) + 1;
    let review = new Review(id, data.rating, data.title, data.content, data.restaurant);
    reviews.push(review);
  }

  updateReview(data) : void {
    let review = this.getReviewById(data.id);
    review.rating = data.rating;
    review.title = data.title;
    review.content = data.content;
    review.restaurant = data.restaurant;
  }
}
