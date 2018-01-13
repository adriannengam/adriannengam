//Moved this week and wasn't able to tackle this homework 100%,  will be pushing a better commit later this weekend!


$(document).ready(function(){
//If user types "New York, New York City, NYC"
var city= default
if (city === "NYC" || "New York City" || "New York")
	//and user clicks submit-btn 
		//change .body background in CSS to nyc.jpg
$('#submit-btn').on('click', switchBackground);
function switchBackground() {
 $('body').attr('background', 'url(images/austin.jpg)');
 event.preventDefault()
}
//Else If user types "SF or Bay Area" 
else if (city === "SF" || "Bay Area")
	//and user clicks submit-btn 
		//change .body background in CSS to sf.jpg
//Else If user types "Los Angeles, LA, LAX"
else if (city === "Los Angeles" || "LA" || "LAX")
	//and user clicks submit-btn
		//change .body background in CSS to la.jpg
//Else If user types "Austin, ATX"
else if (city === "Austin" || "ATX")
	//and user clicks submit-btn
		//change .body background in CSS to austin.jpg
//Else If user types "Sydney, SYD"
else if (city === "Sydney" || "Syd")
	//and user clicks submit-btn
		//change .body background in CSS to sydney.jpg
})