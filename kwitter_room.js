user = localStorage.getItem("User");
document.getElementById("welcome").innerHTML= "Welcome " + user + "!";
function logout() {
  window.location = "index.html"
}
var firebaseConfig = {
  apiKey: "AIzaSyBwC-_KpAPrwHJeFIvinJFscXYBk8xVchY",
  authDomain: "kwitter-and-lets-chat-web-app.firebaseapp.com",
  databaseURL: "https://kwitter-and-lets-chat-web-app-default-rtdb.firebaseio.com",
  projectId: "kwitter-and-lets-chat-web-app",
  storageBucket: "kwitter-and-lets-chat-web-app.appspot.com",
  messagingSenderId: "1098766358877",
  appId: "1:1098766358877:web:c7566463c32d0ccfb9b0b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name" + Room_names);
 row="<div class='room_name' id="+Room_names + " onclick='redirectToRoom(this.id)'>#" + Room_names + "</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function  add_room()
{
  console.log("Function is working");
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("Room Name" , room_name);
    //window.location= "kwitter_room.html"
}
function redirectToRoom(name)
{
console.log(name);
localStorage.setItem("Room_name" , room_name);
//window.location= "kwitter_page.html"
}