import { Restaurant } from "./restaurant";

export class Review {
    id: number;
    rating: number;
    title: string;
    content: string;
    created: Date;
    restaurant: Restaurant;
}