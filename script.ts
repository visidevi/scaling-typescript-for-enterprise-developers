console.log('Hello, world!');

class  City {
    name: string;
    country: string;
    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }
    getCity() {
        return `${this.name}, ${this.country}`;
    }
}


const berlin = new City('Berlin', 'Germany');
console.log(berlin.getCity()); // Berlin, Germany