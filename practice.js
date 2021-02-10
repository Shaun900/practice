// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDTwO92HTtNdji7wVAPxvAEkDw5xNaFfYo",
    authDomain: "kwitter-a1903.firebaseapp.com",
    databaseURL: "https://kwitter-a1903-default-rtdb.firebaseio.com",
    projectId: "kwitter-a1903",
    storageBucket: "kwitter-a1903.appspot.com",
    messagingSenderId: "589493225767",
    appId: "1:589493225767:web:8186b20d480a2459cd0102",
    measurementId: "G-CPTRW452HG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
      user_name  = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
});
  }