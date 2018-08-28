window.onscroll = function() {myFunction()};

var mainmenu = document.getElementById("mainmenu");
var container = document.getElementById("container");
var spme = document.getElementById("spme");
var sticky1 = mainmenu.offsetTop;
var sticky2 = container.offsetTop;
var sticky3 = spme.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky1) {mainmenu.classList.add("sticky1")} else {mainmenu.classList.remove("sticky1")}
    if (window.pageYOffset >= sticky2) {container.classList.add("sticky2")} else {container.classList.remove("sticky2")}
    if (window.pageYOffset >= sticky3) {spme.classList.add("sticky3")} else {spme.classList.remove("sticky3")}
}

window.openNav = () => {
    document.getElementById("mySidenav").style.width = "130px";
}

window.closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 0;
var showSlides  = () => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actives", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " actives";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
window.showSlides = showSlides;
window.showSlides();

window.myVideo = document.getElementById("video1");
window.playPause = () => {
    if (window.myVideo.paused)
    window.myVideo.play();
    else
    window.myVideo.pause();
}