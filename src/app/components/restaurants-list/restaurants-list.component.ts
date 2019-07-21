import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Restaurant } from '../..//models/restaurant';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.sass']
})
export class RestaurantsListComponent implements OnInit {

  private restaurants : Restaurant[];
  
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.restaurants = this.dataService.getRestaurants();
  }

}
