// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBP8wsAX4gWuTjE6OjYEfFBnseMbPrpjGg",
    authDomain: "kwitter-457de.firebaseapp.com",
    databaseURL: "https://kwitter-457de-default-rtdb.firebaseio.com",
    projectId: "kwitter-457de",
    storageBucket: "kwitter-457de.appspot.com",
    messagingSenderId: "375628832944",
    appId: "1:375628832944:web:77174f5529efb2ea3c9b75"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
};