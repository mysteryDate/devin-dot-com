$(document).ready(function() {

	var background = new Image();
	background.src = "../drawings/picnic.jpg";

	background.onload = function() {
		$('body').css('background-image', 'url("../drawings/picnic.jpg")');
	}
});

