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
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.politics').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.politics').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#politics-drop').show();
            $('#slide-down').slideDown();
            $(".politics").addClass('open');
            $(this).addClass('active');
        }
    });

	$(".business").on('click', function(e){
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.business').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.business').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#business-drop').show();
            $('#slide-down').slideDown();
            $(".business").addClass('open');
            $(this).addClass('active');
        }
    });

	$(".technology").on('click', function(e){
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.technology').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.technology').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#technology-drop').show();
            $('#slide-down').slideDown();
            $(".technology").addClass('open');
            $(this).addClass('active');
        }
    });

	$(".culture").on('click', function(e){
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.culture').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.culture').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#culture-drop').show();
            $('#slide-down').slideDown();
            $(".culture").addClass('open');
            $(this).addClass('active');
        }
    });

	$(".blogs").on('click', function(e){
        event.preventDefault();
        $('li').attr('class', '')
        if ($('.blogs').hasClass('open')) {
            $("#slide-down").slideUp();
            $('.blogs').removeClass('open');
        }
        else {
            $('.drop').hide();
            $('#blogs-drop').show();
            $('#slide-down').slideDown();
            $(".blogs").addClass('open');
            $(this).addClass('active');
        }
    });

	//If div Is dropped down
		//#slide-down stays as is
		//Else if same section ID
			//#slide-down slides up
