// (function() {
//   document.querySelector("a-box").addEventListener("click", function(evt) {
//     document.querySelector("a-box").setAttribute("visible", false)
//   })
// })();

var fadeValue = 0.1;

setInterval(function(){
	var opacity = document.getElementById('opacity');
	var value = opacity.getAttribute('text', 'opacity') + fadeValue;
	if(value <= 0) fadeValue = 0.1;
	else if(value >= 1) fadeValue = -0.1; 
	opacity.setAttribute('text', 'opacity', vallue);
}, 100);