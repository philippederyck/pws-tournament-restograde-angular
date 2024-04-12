import {ActivatedRouteSnapshot, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {
  RestaurantsListComponent
} from "./components/restaurants-list/restaurants-list.component";
import {
  RestaurantReviewsComponent
} from "./components/restaurant-reviews/restaurant-reviews.component";
import {inject} from "@angular/core";
import {DataService} from "./data.service";
import {ReviewNewComponent} from "./components/review-new/review-new.component";
import {ReviewEditComponent} from "./components/review-edit/review-edit.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsListComponent },
  {
    path: 'restaurants/:id/reviews',
    component: RestaurantReviewsComponent,
    resolve: {
      restaurant: resolveRestaurant,
      reviews: resolveRestaurantReviews
    }
  },
  {
    path: 'reviews/new',
    component: ReviewNewComponent,
    resolve: {
      restaurants: resolveRestaurants
    }
  },
  {
    path: 'reviews/:id/edit',
    component: ReviewEditComponent,
    resolve: {
      review: resolveReview,
      restaurants: resolveRestaurants
    }
  },
  { path: '**', redirectTo: '/' },
];


/* Define function resolvers */

function resolveRestaurant(route: ActivatedRouteSnapshot) {
  return inject(DataService).getRestaurantById(+route.paramMap.get('id')!);
}

function resolveRestaurantReviews(route: ActivatedRouteSnapshot) {
  return inject(DataService).getReviewsByRestaurantId(+route.paramMap.get('id')!);
}

function resolveRestaurants(route: ActivatedRouteSnapshot) {
  return inject(DataService).getRestaurants();
}

function resolveReview(route: ActivatedRouteSnapshot) {
  return inject(DataService).getReviewById(+route.paramMap.get('id')!)
}
