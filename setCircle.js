/*
	Gets the radius from slider
*/
var radius = 0;

function showValue(newValue){
	var scale = 10000; 
	document.getElementById("range").innerHTML=newValue*scale;
	radius = newValue*scale;
}

function getRadius(){
	return radius;
}

