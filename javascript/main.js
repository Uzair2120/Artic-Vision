
var nav = document.getElementById("main1");
window.addEventListener('scroll', function (a) {
    if (window.pageYOffset > 10) {
        nav.style.boxShadow = "0 4px 5px -3px gray";
    } else {
        nav.style.boxShadow = "none";
    }
})


var button = document.querySelector(".btn");
var in_btn = document.querySelector(".in-btn");
var menu = document.querySelector(".for-menu");
button.addEventListener('click', function (a) {
    button.classList.toggle("active-btn");
    in_btn.classList.toggle("active-inbtn");
    menu.classList.toggle("for-menu-on");

})

var nav = document.getElementById("main1");
var to_top = document.getElementById("to-top");
window.addEventListener('scroll', function (b) {
    if (window.pageYOffset > 200) {
        to_top.style.display = "block"
    } else {
        to_top.style.display = "none"
    }
})

