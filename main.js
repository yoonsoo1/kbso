// navbar animation

var nav = document.querySelector('.main-nav');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 100){
		nav.classList = ' small main-nav'
	} else {
		nav.classList ='main-nav'
	}
})

// pre-loader
$(window).on("load", function(){
	$(".loader-wrapper").fadeOut("slow");
	$("#home-header .container").addClass( "titleanimation" );
	$("#team-header .container").addClass( "titleanimation" );
});