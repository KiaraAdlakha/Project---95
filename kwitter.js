function add_user()
{
    localStorage.setItem("User" , document.getElementById("user").value);
    window.location="kwitter_room.html";
}