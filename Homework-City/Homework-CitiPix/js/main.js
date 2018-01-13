$(document).ready(function(){
//If user types "New York, New York City, NYC"
	//and user clicks submit-btn 
		//change .body background in CSS to nyc.jpg
$('#submit-btn').on('click', switchBackground);
function switchBackground() {
 $('body').css('background', 'url(../images/austin.jpg)');
}
//Else If user types "SF or Bay Area" 
	//and user clicks submit-btn 
		//change .body background in CSS to sf.jpg
//Else If user types "Los Angeles, LA, LAX"
	//and user clicks submit-btn
		//change .body background in CSS to la.jpg
//Else If user types "Austin, ATX"
	//and user clicks submit-btn
		//change .body background in CSS to austin.jpg
//Else If user types "Sydney, SYD"
	//and user clicks submit-btn
		//change .body background in CSS to sydney.jpg
})