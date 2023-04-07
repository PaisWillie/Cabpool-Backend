function checkForDuplicateEmails() {
    var duplicates = [];
    ref.orderByChild('email').once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        var key = childSnapshot.key;
        snapshot.forEach(function(innerChildSnapshot) {
          var innerEmail = innerChildSnapshot.val().email;
          var innerKey = innerChildSnapshot.key;
          if (email === innerEmail && key !== innerKey) {
            duplicates.push(email);
          }
        });
      });
      console.log("Duplicate emails: ", duplicates);
      return duplicates;
    });
  }