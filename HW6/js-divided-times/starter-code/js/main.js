//When user clicks (this) in menu
	//switch section ID to this
	//If div is not dropped down
		//#slide-down container down

	$(".international").on("click", function(e){
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.international').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.international').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#international-drop').show();
            $('#slide-down').slideDown();
            $(".international").addClass('open');
            $(this).addClass('active');
        }
    });

	$(".politics").on('click', function(e){
		$(".drop").hide();
		$('#politics-drop').show();
		$('#slide-down').slideDown();
		console.log("test")
	});

	$(".business").on('click', function(e){
		$(".drop").hide();
		$('#business-drop').show();
		$('#slide-down').slideDown();
		console.log("test")
	});

	$(".technology").on('click', function(e){
		$(".drop").hide();
		$('#technology-drop').show();
		$('#slide-down').slideDown();
		console.log("test")
	});

	$(".culture").on('click', function(e){
		$(".drop").hide();
		$('#culture-drop').show();
		$('#slide-down').slideDown();
		console.log("test")
	});

	$(".blogs").on('click', function(e){
		$(".drop").hide();
		$('#blogs-drop').show();
		$('#slide-down').slideDown();
		console.log("test")
	});


	//If div Is dropped down
		//#slide-down stays as is
		//Else if same section ID
			//#slide-down slides up
