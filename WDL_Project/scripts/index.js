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
