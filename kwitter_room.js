// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

var firebaseConfig = {
    apiKey: "AIzaSyDHvFp7MtBWVmdZswoa68lVPt2k3E7ynI8",
    authDomain: "letschat-5e429.firebaseapp.com",
    databaseURL: "https://letschat-5e429-default-rtdb.firebaseio.com",
    projectId: "letschat-5e429",
    storageBucket: "letschat-5e429.appspot.com",
    messagingSenderId: "833092867515",
    appId: "1:833092867515:web:d54a2be26197996149609e",
    measurementId: "G-XKNBQ46DLF"
  };

  firebase.initializeApp(firebaseConfig);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

username = localStorage.getItem("username");
document.getElementById("nameLab").innerHTML = "Welcome to LetsChat, " + username + "!"

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function addRoom() {
    roomname = document.getElementById("roomNameInp").value;
    firebase.database().ref("/").child(roomname).update({
          purpose : "adding room name"
    })
    localStorage.setItem("roomname", roomname);
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class='room_name' id="+ Room_names + " onclick='RTRN(this.id)'>#" + Room_names + "</div><hr>";

document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();



function RTRN(name) {

    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";

}



function logout() {

    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";

}