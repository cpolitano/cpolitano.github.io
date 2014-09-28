$(document).ready( function() {
	
	$('#nav li').on("click", function() {
		event.preventDefault();		
		if ( $(this).hasClass("active") ) {
			$("#slide-down").slideUp(1000).removeClass("open");
			$(this).removeClass("active");
			$('#headshot').fadeIn(1500);
			$('#intro').fadeIn(1500);	
		}
		else {
			$('#nav li').removeClass("active"); 
			$('#headshot').fadeOut(1500);
			$('#intro').fadeOut(1500);	
			var thisClass = $(this).attr("class");
			$(this).toggleClass("active");					
			$("#slide-down").slideDown(1000).addClass("open");
			$('#' + thisClass).toggleClass("open").show().siblings().removeClass("open").hide();		
		};		
	});
})