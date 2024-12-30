var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost) {
        this.amenities = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Hotel.prototype.addAmenity = function (amenities) {
        this.amenities.push(amenities);
    };
    Hotel.prototype.describeHotel = function () {
        // The <hotel.name> costs <hotel.cost> and includes the following amenities: <hotel.amenities>
        return "The ".concat(this.name, " costs ").concat(this.cost, " and includes the following amenities: ").concat(this.amenities.join(', '));
    };
    return Hotel;
}());
var peakLodge = new Hotel("06", "Peak Lodge", 250);
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
var description = peakLodge.describeHotel();
console.log(description);
