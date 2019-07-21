import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantReviewsResolve } from './resolvers/restaurant-reviews-resolve';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    HomeComponent,
    RestaurantReviewsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    RestaurantReviewsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }