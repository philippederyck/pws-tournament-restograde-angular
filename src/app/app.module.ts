import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';
import { RestaurantResolve } from './resolvers/restaurant-resolve';
import { RestaurantsResolve } from './resolvers/restaurants-resolve';
import { ReviewResolve } from './resolvers/review-resolve';
import { ReviewEditComponent } from './components/review-edit/review-edit.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewNewComponent } from './components/review-new/review-new.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    HomeComponent,
    RestaurantReviewsComponent,
    ReviewEditComponent,
    ReviewFormComponent,
    ReviewNewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    RestaurantResolve,
    RestaurantReviewsResolve,
    RestaurantsResolve,
    ReviewResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }