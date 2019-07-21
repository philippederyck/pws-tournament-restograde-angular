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

  getReviewsByRestaurantId(id : number) : Review[] {
    return reviews.filter(r => r.restaurant.id == id);
  }
}
