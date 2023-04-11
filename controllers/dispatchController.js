'use strict';

const firebase = require('../db');
const Ride = require('../models/carpoolRide');
const firestore = firebase.firestore();
const ref_offer = firestore.collection('offers');
const ref_request = firestore.collection('requests');
const ref_ride = firestore.collection('rides');
const ref_taxi = firestore.collection('taxis');

const offerCarpool = async (req, res, next) => {
    try {
    const {userID, taxiID} = req.body;
    
    // Checks if the taxiId exists in the database
    const taxi_snapshot = await ref_taxi.where('id', '==', taxiID).get();
    if (taxi_snapshot.empty) {
      throw new Error({error: 'taxi not found in the rides'});
    };
    const taxiDoc = taxi_snapshot.docs[0];
    const capacity = taxiDoc.get('capacity');

    // Checks if the userID exists in the database
    const user_snapshot = await ref_ride.where('mainRider', '==', userID).get();
    if (user_snapshot.empty) {
      throw new Error({error: 'User not found in the rides'});
    };
    // Checks if the offer already exists in the database
    const offer_snapshot = await ref_offer.where('offeringEmail', '==', userID).get();
    if (!offer_snapshot.empty) {
      throw new Error({error: 'User not found in the rides'});
    };

    // Changes the offer_mode in the ride database and takes the ride's document ID
    const query = ref_ride.where('taxiID', '==', taxiID).limit(1);
    const snapshot = await query.get();
    if (snapshot.empty) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const userDoc = snapshot.docs[0];
    const rideID = userDoc.id;
    const offer_mode = true;
    await userDoc.ref.update({offer_mode});

    // Adds the retrieved document ID and taxiID to the the offers collection
    const offeringEmail = userID
    ref_offer.add({ offeringEmail, rideID });
    res.status(200).json({valid: true, rideID: rideID, seatCapacity: capacity});

} catch (error){
        console.error(error);
        res.status(401).json({valid: false});
    }
};

const requestCarpool = async (req, res, next) => {
  try {

    // Sends the request to the requests collection
      const request = req.body;
      const snapshot = await ref_request.where('', '==', request.userID).get();
      if (!snapshot.empty) {
        throw new Error(`${userID} has already submitted their request`);
      }
  
    await ref_request.add(request);

  // Retrieves all the rideIDs from the offers collection
  const ride_snapshot = await ref_ride.where('offer_mode', '==', true).get();
  const rides = []
  ride_snapshot.forEach((doc) => {
    const rideID = doc.data().rideID;
    const taxiID = doc.data().taxiID;
    const liveLocation = doc.data().liveLocation;

    //Sends the user's rideID, taxiID and liveLocation to the frontEnd
    rides.push({rideID: rideID, taxiID: taxiID, liveLocation: liveLocation});
  });
  console.log(rides)

  res.status(200).json(rides)


} catch (error) {
  console.error(error);
  res.status(401).send({valid: false});
  } 
};


const selectCarpool = async (req, res, next) => {
  try {
  const {rideID, userID} = req.body;
  const snapshot = await ref_ride.where('mainRider', '==', userID).where('rideID' , "==", rideID).get();
  if (snapshot.empty) {
    throw new Error(false);
  }
  // Sends a request to another port

  // Sends the confirmation of selection to the frontEnd
  res.status(200).send({sent: true});
} catch (error) {
    console.error(error);
    res.status(401).send({sent: true});
  }
};

const acceptCarpool = async (req, res, next) => {
  try {
    const {accpetance} = req.body;
    if (approval == true) {
      res.status(200).send({request: 'approved'});
    }
    else {
      res.status(200).send({request: 'declined'});
    }
  }
  catch (error) {
    console.error.error();
    res.status(401).send({valid: false});
  }
};


module.exports = {
    offerCarpool, requestCarpool, selectCarpool, acceptCarpool
}