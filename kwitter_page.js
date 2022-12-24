const firebaseConfig = {
    apiKey: "AIzaSyD_Gah1hWgzh7UwIuF2vYgdpgtOP9OEbMY",
    authDomain: "kwitter-redcoratingpage.firebaseapp.com",
    databaseURL: "https://kwitter-redcoratingpage-default-rtdb.firebaseio.com",
    projectId: "kwitter-redcoratingpage",
    storageBucket: "kwitter-redcoratingpage.appspot.com",
    messagingSenderId: "799513561141",
    appId: "1:799513561141:web:9a4d35e1cfb3464447097c"
  };
  

  
 
 firebase.initializeApp(firebaseConfig);
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value="";
}   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
