/*
	Gets the radius from slider
*/
var radius;

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
	radius = newValue;
}

function getRadius(){
    window.alert(radius);
}