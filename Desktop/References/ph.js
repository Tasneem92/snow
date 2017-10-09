
$(document).ready(function(event) {
    console.log( "ready!" );
	
	$('.ph[placeholder="Your answer"').focusin(function (event) {	
		$(this).attr("placeholder"," ");
	});

	$('.ph[placeholder="Your answer"').focusout(function (event) {	
		$(this).attr("placeholder","Your answer ");
	});
	
	$('.fruits').click( function() {
		var sub= $(this).parent().children('#sub-menu');
		$(sub).toggle();
	});

});




