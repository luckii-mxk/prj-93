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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

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