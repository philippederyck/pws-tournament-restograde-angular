import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';
import { RestaurantResolve } from './resolvers/restaurant-resolve';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsListComponent },
  { 
    path: 'restaurants/:id/reviews', 
    component: RestaurantReviewsComponent, 
    resolve: {
      restaurant: RestaurantResolve,
      reviews: RestaurantReviewsResolve
    }
  },
  // { 
  //   path: 'reviews/new', 
  //   component: RestogradeReviewsNewComponent,
  //   resolve: {
  //     restaurants: RestaurantsResolve
  //   },
  //   canActivate: [AuthenticationGuardService]
  // },
  // { 
  //   path: 'reviews/:id/edit', 
  //   component: RestogradeReviewsEditComponent,
  //   resolve: {
  //     review: ReviewResolve,
  //     restaurants: RestaurantsResolve
  //   },
  //   canActivate: [AuthenticationGuardService]
  // },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }