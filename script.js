window.onload = function () {

	let paragraph2 = document.getElementById("paragraph2");

// Turn paragraph purple on mouseover
	paragraph2.addEventListener("mouseenter", function(event) {
		// highlight the mouseenter target
		event.target.style.color = "purple";
	}, false);
}