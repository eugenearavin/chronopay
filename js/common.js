function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



$(document).ready(function(){
	$(".line-1").on("animationend, oAnimationEnd, webkitAnimationEnd",
			function(event){
				$(".line-1").removeClass("tab__line_anim");	
				$(".tablinks-2").removeClass("active");	
				$(".tablinks-1").removeClass("active");	
				$(".tablinks-3").removeClass("active");	
				$(".tablinks-2").addClass("active");	
				$("#tab_1").css({'display' : 'none'});	
				$("#tab_2").css({'display' : 'block'});	
				$(".line-2").addClass("tab__line_anim");	
			})

	$(".line-2").on("animationend, oAnimationEnd, webkitAnimationEnd",
			function(event){
				$(".line-2").removeClass("tab__line_anim");	
				$(".tablinks-1").removeClass("active");	
				$(".tablinks-2").removeClass("active");	
				$(".tablinks-3").removeClass("active");
				$(".tablinks-3").addClass("active");
				$(".line-3").addClass("tab__line_anim");	
				$("#tab_2").css({'display' : 'none'});	
				$("#tab_3").css({'display' : 'block'});		
			})

	$(".line-3").on("animationend, oAnimationEnd, webkitAnimationEnd",
			function(event){
				$(".line-3").removeClass("tab__line_anim");
				$(".tablinks-1").removeClass("active");	
				$(".tablinks-2").removeClass("active");	
				$(".tablinks-3").removeClass("active");	
				$(".tablinks-1").addClass("active");
				$(".line-1").addClass("tab__line_anim");	
				$("#tab_3").css({'display' : 'none'});	
				$("#tab_1").css({'display' : 'block'});		
			})
})	


	$(".tab__item-1").click(function () {
		$(".line-1").toggleClass("tab__line_anim");
		$("#tab_2").css({'display' : 'none'});	
		$("#tab_3").css({'display' : 'none'});
		$(".line-2").removeClass("tab__line_anim");	
		$(".line-3").removeClass("tab__line_anim");	
	});

	$(".tab__item-2").click(function () {
		$(".line-2").toggleClass("tab__line_anim");
		$("#tab_1").css({'display' : 'none'});	
		$("#tab_3").css({'display' : 'none'});
		$(".line-1").removeClass("tab__line_anim");	
		$(".line-3").removeClass("tab__line_anim");
	});

	$(".tab__item-3").click(function () {
		$(".line-3").toggleClass("tab__line_anim");
		$("#tab_2").css({'display' : 'none'});	
		$("#tab_1").css({'display' : 'none'});
		$(".line-2").removeClass("tab__line_anim");	
		$(".line-1").removeClass("tab__line_anim");
	});


$(document).ready(function() {

	$('.open-form').click(function() {
		$('.form-popup').show();
	});
	$('.close-form').click(function() {
		$('.form-popup').hide();
	});
  
	$('.reset-form').click(function() {
		$('.success-message').show();
    $('#my-form').trigger( 'reset' );

    setTimeout(function() {
	    $('.success-message').hide()
    }, 1500);
	});

	$(document).mouseup(function(e) {
		var container = $(".form-wrapper");
		var form = $(".form-popup");

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			form.hide();
		}
	});


});



$(".popup").magnificPopup();
	
(function() {
    
    $.fatNav();
    
}());

