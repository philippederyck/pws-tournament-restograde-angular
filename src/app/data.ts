import { Restaurant } from "./models/restaurant";
import { Review } from './models/review';

var restaurants : Restaurant[] = [
    new Restaurant(1, "L’autre chose", "Paris, France", "For those who love lobster, beef, oysters,, champagne ... Cozy dining or a quick lunch at the counter.", "restaurant1.jpg"),
    new Restaurant(2, "Luke’s", "Nashville, TN, USA", "Luke’s is a family restaurant that wants to offer the tastiest gourmet burgers in Nashville and far beyond.", "restaurant2.jpg"),
    new Restaurant(3, "Unter dem Turm", "Berlin, Germany", "Unter den Turm serves local cuisine in a modern setting, but with a nostalgic touch to traditional rural life.", "restaurant3.jpg"),
];

var reviews : Review[] = [];

export { restaurants, reviews };

/* Restaurants*/


