window.onload = function () {
	initParagraph2();
};
	function initParagraph2 (){
	let paragraph2 = document.getElementById("paragraph2");

// change color of paragraph on mouseover
	paragraph2.addEventListener("mouseover", function(event) {
		// highlight the mouseenter target
		event.target.style.color = "purple";
		// reset the color after a short delay
		setTimeout(function() {
			event.target.style.color = "";
		}, 500);
	}, false);
}