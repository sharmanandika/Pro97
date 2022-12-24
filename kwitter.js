function adduser(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="Kwitter_room.html";

}
var r=Math.floor(Math.random()*255);
var g=Math.floor(Math.random()*255);
var b=Math.floor(Math.random()*255);
document.getElementByClass("header").style.color="rgb(r,g,b)";
