/*
	Gets the radius from slider
*/
var radius = 0;

function showValue(newValue){
	var scale = 1000; 
	document.getElementById("range").innerHTML=newValue*scale;
	radius = newValue*scale;
	return radius;
}

function getRadius(){
	return radius;
}



