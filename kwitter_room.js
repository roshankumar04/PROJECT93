
//ADD YOUR FIREBASE LINKS HEREimport { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyCv5fL0W7h7myFFNosHORxtEJyI93IjIbw",
      authDomain: "kwitter-c3991.firebaseapp.com",
      databaseURL: "https://kwitter-c3991-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3991",
      storageBucket: "kwitter-c3991.appspot.com",
      messagingSenderId: "948139408516",
      appId: "1:948139408516:web:8acb8d0f4ac62fe5e4d6d1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
