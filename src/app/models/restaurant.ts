export class Restaurant {
    id: number;
    name: string;
    description: string;
    city: string;
    image : string;

    constructor(id : number, name : string, description : string, city: string, image : string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.city = city;
        this.image = image;
    }
}