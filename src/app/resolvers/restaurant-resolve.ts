import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { DataService } from '../data.service';

@Injectable()
export class RestaurantResolve implements Resolve<Restaurant>{

    constructor(private dataService : DataService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.dataService.getRestaurantById(+route.paramMap.get('id'));
    }
}
