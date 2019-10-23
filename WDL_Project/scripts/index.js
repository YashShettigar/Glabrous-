var menuDecider=document.getElementById('menu');
function menuSlideOut() {
  menuDecider.style.display = "block";
  menuDecider.style.zIndex = "999";
  menuDecider.style.opacity = "1";
}
function menuSlideIn() {
  menuDecider.style.display = "none";
  menuDecider.style.zIndex = "-1";
  menuDecider.style.opacity = "0";
}

var r = window.location.href.split("/index.html");

function MenSection(){
  r[0]+="/MenSection.html";
  window.location.replace(r[0]);
}
function WomenSection(){
  r[0]+="/WomenSection.html";
  window.location.replace(r[0]);
}

function SignOut(){
  r[0]+="/Login.html";
  window.location.replace(r[0]);
}

About = () => {
  r[0]+="/About.html";
  window.location.replace(r[0]);
}