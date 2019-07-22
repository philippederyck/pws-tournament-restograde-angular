import { Restaurant } from "./restaurant";

export class Review {
    id: number;
    rating: number;
    title: string;
    content: string;
    restaurant: Restaurant;

    constructor(id : number, rating: number, title: string, content: string, restaurant: Restaurant) {
        this.id = id;
        this.rating = rating;
        this.title = title;
        this.content = content;
        this.restaurant = restaurant;
    }
}