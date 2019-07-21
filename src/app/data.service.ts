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
}
