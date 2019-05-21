// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var pathname = window.location.pathname,
    pages = ['/index', '/astronomy', 'electronics', 'about'];

$('.topnav').each(function(i) {
    if (pathname.includes(pages[i])) this.addClass('active');
    else if (this.className.includes('active')) this.removeClass('active');
});
// window.onload = function() { buttonActive() };

// var pageLoad = navbar.classList

// function buttonActive() {
//     if (window.URL === "/index") {
//         navbar.classList.add("active")
//     } else if (window.URL === "/astronomy")
//         navbar.classList.add("active")
// }

// // Get the container element
// var btnContainer = document.getElementById("topnav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("-active", "");
//         this.className += "-active";
//     });
// }