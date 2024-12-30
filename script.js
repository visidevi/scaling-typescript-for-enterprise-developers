console.log('Hello, world!');
// interface City {
//     name: string;
//     country: string;
//     population?: number; 
// }
// let newYork: City = {
//     name: 'New York',
//     country: 'USA',
//     population: 8000000
// }
// console.log(newYork); // { name: 'New York', country: 'USA', population: 8000000 }
// let london: City = {
//     name: 'London',
//     country: 'UK',
// }
// console.log(london); // { name: 'London', country: 'UK'
// interface CapitalCity extends City {
//     capitalBuilding: string;
//     landmarks: string[];
// }
// const tokio: CapitalCity = {
//     name: 'tokio',
//     country: 'Japan',
//     population: 13929286,
//     capitalBuilding: 'Imperial Palace',
//     landmarks: ['Tokyo Tower', 'Skytree']
// }
// console.log(tokio);
var City = /** @class */ (function () {
    function City(name) {
        this.name = name;
    }
    return City;
}());
// Adding type guards to classes
function outputLocation(location) {
    if (location instanceof City) {
        console.log(location.name);
    }
    else {
        console.log(location.toUpperCase());
    }
}
outputLocation(new City('Tokyo')); // Tokyo
outputLocation('Copenhagen'); // TOKYO
