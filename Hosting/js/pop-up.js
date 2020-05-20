$(document).ready(function(){
	$(".pop-up").delay(5000).fadeIn(1000);
	$(".cerrar").click(function(){
		$(".pop-up").fadeOut(800);
	})
	
	$("#tab-uno").addClass("active");
	$("#hosting-dos").fadeOut();
	$("#hosting-tres").fadeOut();

	$("#tab-uno").click(function(){
		$("#hosting-uno").fadeIn(100);
		$("#tab-uno").addClass("active");
		$("#hosting-dos").fadeOut(100);
		$("#tab-dos").removeClass("active");
		$("#hosting-tres").fadeOut(100);
		$("#tab-tres").removeClass("active");

	})

	$("#tab-dos").click(function(){
		$("#hosting-uno").fadeOut(100);
		$("#tab-uno").removeClass("active");
		$("#hosting-dos").fadeIn(100);
		$("#tab-dos").addClass("active");
		$("#hosting-tres").fadeOut(100);
		$("#tab-tres").removeClass("active");

	})

	$("#tab-tres").click(function(){
		$("#hosting-uno").fadeOut(100);
		$("#tab-uno").removeClass("active");
		$("#hosting-dos").fadeOut(100);
		$("#tab-dos").removeClass("active");
		$("#hosting-tres").fadeIn(100);
		$("#tab-tres").addClass("active");

	})

	$(".menu-icon").on("click", function(){
		$("nav").slideToggle();
	})


})