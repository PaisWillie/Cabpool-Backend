class CarpoolRide {
  constructor(position, start, end, stops, riders, taxi_id) {
    this.position = position;
    this.start = start;
    this.end = end;
    this.stops = stops;
    this.riders = riders;
    this.taxi_id = taxi_id;
  }
}

module.exports = CarpoolRide;