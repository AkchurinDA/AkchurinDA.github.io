// GET CURRENT YEAR:
document.getElementById("Year").innerHTML = new Date().getFullYear();

var footerResize = function() {
   $('#footer').css('position', $("body").height() + $("#footer").innerHeight() > $(window).height() ? "inherit" : "fixed");
 };
 $(window).resize(footerResize).ready(footerResize);

// GET DATA FROM JSON:
 fetch("blog-posts/blog-posts.json")
 // Get the JSON data
 .then(response => response.json())
 // Use (display) the JSON data
 .then(data => console.log(data))