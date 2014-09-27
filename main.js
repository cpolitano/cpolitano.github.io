$(document).ready( function() {
	
	$('#nav li').on("click", function() {
		event.preventDefault();		
		if ( $(this).hasClass("active") ) {
			$("#slide-down").slideUp(2500).removeClass("open");
			$(this).removeClass("active");
			$('#headshot').fadeIn(2500);
			$('#intro').fadeIn(2500);	
		}
		else {
			$('#nav li').removeClass("active"); 
			$('#headshot').fadeOut(2500);
			$('#intro').fadeOut(2500);	
			var thisClass = $(this).attr("class");
			$(this).toggleClass("active");					
			$("#slide-down").slideDown(2500).addClass("open");
			$('#' + thisClass).toggleClass("open").show().siblings().removeClass("open").hide();		
		};		
	});
})