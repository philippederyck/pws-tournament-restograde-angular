import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';
import { RestaurantResolve } from './resolvers/restaurant-resolve';
import { ReviewResolve } from './resolvers/review-resolve';
import { RestaurantsResolve } from './resolvers/restaurants-resolve';
import { ReviewEditComponent } from './components/review-edit/review-edit.component';
import { ReviewNewComponent } from './components/review-new/review-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsListComponent },
  { 
    path: 'restaurants/:id/reviews', 
    component: RestaurantReviewsComponent, 
    resolve: {
      restaurant: RestaurantResolve,
      reviews: RestaurantReviewsResolve
    }
  },
  { 
    path: 'reviews/new', 
    component: ReviewNewComponent,
    resolve: {
      restaurants: RestaurantsResolve
    }
  },
  { 
    path: 'reviews/:id/edit', 
    component: ReviewEditComponent,
    resolve: {
      review: ReviewResolve,
      restaurants: RestaurantsResolve
    }
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }