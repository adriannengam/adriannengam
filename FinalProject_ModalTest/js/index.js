$( document ).ready(function() {


// hover img 1
	$(function(){
	  $("#img1").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-01.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-01.jpg');
	  	}
	  });
	  
	});


// close modal
var modal = document.getElementById('imgModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
} 


});