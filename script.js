console.log('Hello, world!');
var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    City.prototype.getCity = function () {
        return "".concat(this.name, ", ").concat(this.country);
    };
    // Method a function that lives inside the class
    City.prototype.getCityPrivate = function () {
        return "".concat(this.name, ", ").concat(this.country);
    };
    return City;
}());
var berlin = new City('Berlin', 'Germany');
console.log(berlin.getCity()); // Berlin, Germany
console.log(berlin.getCityPrivate()); // Error: Property 'getCityPrivate' is private and only accessible within class 'City'.
