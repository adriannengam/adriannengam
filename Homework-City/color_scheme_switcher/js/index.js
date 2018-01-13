// document.getElementById('grayButton').onclick = switchGray;
//document.getElementById('whiteButton').onclick = switchWhite;
$('#grayButton').on('click', switchGray);
$('#whiteButton').on('click', switchWhite);

function switchGray() {
 // document.body.style.backgroundColor = 'gray';
 // document.body.style.color = 'white';
 $('body').css({backgroundColor:'gray', color: 'white'});
}

function switchWhite() {
  //document.body.style.backgroundColor = 'white';
 // document.body.style.color = 'black';
 $('body').css({backgroundColor:'white', color: 'black'});
}
