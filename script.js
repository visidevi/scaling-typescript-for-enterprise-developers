console.log('Hello, world!');
var newYork = {
    name: 'New York',
    country: 'USA',
    population: 8000000
};
console.log(newYork); // { name: 'New York', country: 'USA', population: 8000000 }
var london = {
    name: 'London',
    country: 'UK',
};
console.log(london); // { name: 'London', country: 'UK'
var tokiyo = {
    name: 'Tokiyo',
    country: 'Japan',
    population: 13929286,
    capitalBuilding: 'Imperial Palace',
    landmarks: ['Tokyo Tower', 'Skytree']
};
console.log(tokiyo);
// class  City {
//     name: string;
//     country: string;
//     constructor(name: string, country: string) {
//         this.name = name;
//         this.country = country;
//     }
//     getCity():string {
//         return `${this.name}, ${this.country}`;
//     }
//     // Method a function that lives inside the class
//     private getCityPrivate():string {
//         return `${this.name}, ${this.country}`;
//     }
// }
// const berlin = new City('Berlin', 'Germany');
// console.log(berlin.getCity()); // Berlin, Germany
