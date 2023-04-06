class CarpoolRequest {
    constructor(id, requestingUser, destination) {
      this.id = id;
      this.requestingUser = requestingUser;
      this.destination = destination;
    }
  }
  
  module.exports = CarpoolRequest;