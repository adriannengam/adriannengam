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
// open img 1 
var modal1 = document.getElementById('imgModal');
var btn1 = document.getElementById("img1");

btn1.onclick = function() {
    modal1.style.display = "flex";
    $('.images').addClass('imgBlur');
}


// hover img 2
	$(function(){
	  $("#img2").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-02.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-02.jpg');
	  	}
	  });
	  
	});
// open img 2
var modal2 = document.getElementById('img2Modal');
var btn2 = document.getElementById("img2");

btn2.onclick = function() {
    modal2.style.display = "flex";
    $('.images').addClass('imgBlur');
    $('.modalThumb').addClass('modalThumb2');
}


// hover img 3
	$(function(){
	  $("#img3").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-03.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-03.jpg');
	  	}
	  });
	  
	});

// hover img 4
	$(function(){
	  $("#img4").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-04.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-04.jpg');
	  	}
	  });
	  
	});	

// hover img 5
	$(function(){
	  $("#img5").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-05.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-05.jpg');
	  	}
	  });
	  
	});

// hover img 6
	$(function(){
	  $("#img6").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-06.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-06.jpg');
	  	}
	  });
	  
	});

// hover img 7
	$(function(){
	  $("#img7").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-07.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-07.jpg');
	  	}
	  });
	  
	});

// hover img 8
	$(function(){
	  $("#img8").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-08.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-08.jpg');
	  	}
	  });
	  
	});

// hover img 9
	$(function(){
	  $("#img9").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-09.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-09.jpg');
	  	}
	  });

	});

// hover img 10
	$(function(){
	  $("#img10").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-10.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-10.jpg');
	  	}
	  });

	});

// hover img 11
	$(function(){
	  $("#img11").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-11.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-11.jpg');
	  	}
	  });

	});

// hover img 12
	$(function(){
	  $("#img12").on({
	  	 mouseenter: function(){
	    	$(this).attr('src','img/Hejduk_HoverGrid-12.jpg');
	 	 },
	  	mouseleave: function(){
	    	$(this).attr('src','img/Hejduk_Base-12.jpg');
	  	}
	  });

	});

// close modal
var modal = document.getElementsByClassName("modal")[0];
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  $('.images').removeClass('imgBlur');
} 



});