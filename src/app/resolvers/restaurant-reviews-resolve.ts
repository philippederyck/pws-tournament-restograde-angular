import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Review } from '../models/review';
import { DataService } from '../data.service';

@Injectable()
export class RestaurantReviewsResolve implements Resolve<Review[]>{

    constructor(private dataService : DataService) {}
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.dataService.getReviewsByRestaurantId(+route.paramMap.get('id'));
    }
}
