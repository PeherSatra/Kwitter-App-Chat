var firebaseConfig = {
      apiKey: "AIzaSyAXIIMQq9qqxSLYd2sVJc_Yea__EF0o63o",
      authDomain: "practice-activity-6674d.firebaseapp.com",
      databaseURL: "https://practice-activity-6674d-default-rtdb.firebaseio.com",
      projectId: "practice-activity-6674d",
      storageBucket: "practice-activity-6674d.appspot.com",
      messagingSenderId: "950940935253",
      appId: "1:950940935253:web:c860e55b20e103f74ba0dc"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}