class CarpoolRequest {
    constructor(id, destination, requesting_user) {
      this.id = id;
      this.destination = destination;
      this.requesting_user = requesting_user;
    }
  }
  
  module.exports = CarpoolRequest;