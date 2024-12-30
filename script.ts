console.log('Hello, world!');

class  City {
    name: string;
    country: string;
    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }
    getCity():string {
        return `${this.name}, ${this.country}`;
    }

    // Method a function that lives inside the class
    private getCityPrivate():string {
        return `${this.name}, ${this.country}`;
    }
}


const berlin = new City('Berlin', 'Germany');
console.log(berlin.getCity()); // Berlin, Germany

