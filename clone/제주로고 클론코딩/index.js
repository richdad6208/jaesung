var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
slideShow(current);
prev.onclick= prevShow;
next.onclick= nextShow;

function slideShow(n) {
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    slides[n].style.display = "block";
};

function prevShow() {
    if(current > 0) current -= 1;
    else current = slides.length - 1;        
    slideShow(current);
}
function nextShow() {
    if(current < slides.length - 1)current += 1;
    else current = 0;
    slideShow(current);
};