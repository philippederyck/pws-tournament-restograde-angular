import { Restaurant } from "./models/restaurant";
import { Review } from './models/review';

var restaurants : Restaurant[] = [
    new Restaurant(1, "L’autre chose", "Paris, France", "For those who love lobster, beef, oysters,, champagne ... Cozy dining or a quick lunch at the counter.", "restaurant1.jpg"),
    new Restaurant(2, "Luke’s", "Nashville, TN, USA", "Luke’s is a family restaurant that wants to offer the tastiest gourmet burgers in Nashville and far beyond.", "restaurant2.jpg"),
    new Restaurant(3, "Unter dem Turm", "Berlin, Germany", "Unter den Turm serves local cuisine in a modern setting, but with a nostalgic touch to traditional rural life.", "restaurant3.jpg"),
];

var reviews : Review[] = [
    new Review(1, 3, "Too saucy!" , "The quality of the food is poor. Too much sauce on everything. I would not return to this place. Price is way to high for what you get.", restaurants[0]),
    new Review(2, 1, "Dual standards" , "As locals we can say that this was our last visit. We were surprised by the downfall to his place. It used to be a very good price/quality, but now we are really disappointed. I ordered the same starter as my husband, but got half the portion that he got.  After we informed the staff, the owner came to yell at us. I have never been more humiliated in my life. ", restaurants[0]),
    new Review(3, 6, "Just so so" , "We were well received, the staff was OK, but we didn’t like the food. Not spectacular, but also not bad.", restaurants[0]),
    new Review(4, 9, "The place to be", "The Restaurant is right in the center of town. It has top food en it’s a very nice place with a friendly and professional staff", restaurants[1]),
    new Review(5, 8, "Friendly and delicious!" , "An incredibly friendly hostess. Nice atmosphere, a great place to eat. We will be coming back", restaurants[1]),
    new Review(6, 7, "A bit expensive, bot not too bad" , "The service was slow. The food was OK, but the portions where to small for what you pay", restaurants[1]),
    new Review(7, 4, "Go somewhere else" , "Bad and slow service. The quality of the food is really low. Way to expensive for what you get.", restaurants[2]),
    new Review(8, 4, "Great parking, crappy restaurant" , "Fine location, lots of parking. But those are the only good things. We had the suggestion menu. The meat wasn’t eatable, you had to look for the salad with a magnifier. There were exactly 3 pieces of fish in the stew. No we won’t be coming back.", restaurants[2]),
    new Review(9, 1, "Kitchen nightmares!", "In contrast to the pleasant setting, the quality of the dishes was substandard. A steak that is heavily overcooked, a fish pan that looks more like a plate of soup, mashed potatoes from a pack and staff that comes to ask if everything is alright but when we said 'no' did not respond. I dare to say that I have never eaten something so bad.", restaurants[2]),
];

export { restaurants, reviews };