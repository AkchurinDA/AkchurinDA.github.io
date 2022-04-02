// GET CURRENT YEAR:
document.getElementById("Year").innerHTML = new Date().getFullYear();

var footerResize = function() {
   $('#footer').css('position', $("body").height() + $("#footer").innerHeight() > $(window).height() ? "inherit" : "fixed");
 };
 $(window).resize(footerResize).ready(footerResize);