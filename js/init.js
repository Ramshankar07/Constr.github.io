//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "25 dec 2022 14:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	