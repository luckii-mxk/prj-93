
function addUser() {

    username = document.getElementById("nameInp").value;

    localStorage.setItem("username", username)

    window.location = "kwitter_room.html";

}
