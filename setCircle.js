/*
	Gets the radius from slider
*/
var radius = 0;

function showValue(newValue){
	document.getElementById("range").innerHTML=newValue;
	window.alert(newValue);
	radius = newValue;
}

function getRadius(){
	//window.alert(radius);
    return radius;
}
var r = getRadius();