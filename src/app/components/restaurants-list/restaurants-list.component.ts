import { Component } from '@angular/core';
import {DataService} from "../../data.service";
import {Restaurant} from "../../models/restaurant";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.css'
})
export class RestaurantsListComponent {
  restaurants: Restaurant[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.restaurants = this.dataService.getRestaurants();
  }
}
