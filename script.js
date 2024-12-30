console.log('Hello, world!');
var City = /** @class */ (function () {
    function City(name, country) {
        this.name = name;
        this.country = country;
    }
    City.prototype.getCity = function () {
        return "".concat(this.name, ", ").concat(this.country);
    };
    return City;
}());
var berlin = new City('Berlin', 'Germany');
console.log(berlin.getCity()); // Berlin, Germany
