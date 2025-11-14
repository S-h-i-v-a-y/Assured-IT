// Custom site behavior: smooth scrolling and safe anchor handling
$(document).ready(function(){
	// Prevent default action for bare "#" links to avoid jumping to top
	$(document).on('click', 'a[href="#"]', function(e){
		e.preventDefault();
	});

	// Smooth scroll for on-page anchors (ignore bare '#' and bootstrap controls)
	$(document).on('click', 'a[href^="#"]', function(e){
		var href = $(this).attr('href');
		// ignore bare '#'
		if(href === '#') return;
		// ignore bootstrap carousel/controls that use data-bs-slide
		if ($(this).attr('data-bs-slide') !== undefined || $(this).attr('data-slide') !== undefined) return;
		var target = $(href);
		if(target.length){
			e.preventDefault();
			var navOffset = 70; // adjust if navbar height differs
			$('html, body').animate({ scrollTop: target.offset().top - navOffset }, 500);
		}
	});
});
