class CarpoolRide {
  constructor(position, start, end, stops, riders, taxiID) {
    this.position = position;
    this.start = start;
    this.end = end;
    this.stops = stops;
    this.riders = riders;
    this.taxiID = taxiID;
  }
}

module.exports = CarpoolRide;