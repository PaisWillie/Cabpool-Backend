'use strict';

const firebase = require('../db');
const Rating = require('../models/rating');
const firestore = firebase.firestore();
const ref = firestore.collection('ratings')
const user_ref = firestore.collection('users');

const submitRating  = async (req, res) => {
    try {
        const {fromUser, rating, toUser} = req.body;
        //Updates the user's average rating
        // const snapshot = await user_ref.where("email", "==", toUser).get();
        // let avgRating = 0;
        // snapshot.forEach(doc => {
        // avgRating = doc.data().avgRating;
        // });


        // Adds the rating to the database
        await ref.add(data);
        res.status(200).send('Rating was submitted.')
    } catch (error) {
        console.error(error);
        res.status(401).send(error.message);
    }
};

const requestRating = async (req, res, next) => {
    try {
      const {id} = req.body;
  
      // Get the user document with the specified ID from the database
      const snapshot = await ref.where('id', '==', id).get();
      if (snapshot.empty) {
        throw new Error(`Rating with ID ${id} not found`);
      }
  
      // Extract the user's JSON data from the document and sends it
      const userDoc = await usersRef.doc(id).get();
      const data = userDoc.data()
      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(404).send(false);
    }
  };


module.exports = {
    requestRating, submitRating
};