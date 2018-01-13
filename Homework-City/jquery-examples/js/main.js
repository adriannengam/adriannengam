$(document).ready(function(){

  //Part 1
  //change lead text
$('.lead').text("I am different");
  //set value
$('#set-value').val('ADRIANNE!');
  //change image: https://source.unsplash.com/random
$('#showRandom').attr("src","https://source.unsplash.com/random")
  //change style background-color
$('body').css({backgroundColor:'gray', color: 'white'})


  //Part 2
  //add class to caption
$('figcaption').addClass('figure-caption');


  //Part 3 Animate and move
  //slide figure down
$('figure').slideUp('7800');


  //Part 4
  //When user clicks on h1 change the text of the lead
$('h1').on('click', switchText);
function switchText() {
 $('h1').text("I am also different");
}

$('#grayButton').on('click', toggleGray);
function toggleGray() {
  $('body').toggleClass('background-gray');
}

})