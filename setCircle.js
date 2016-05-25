/*
	Gets the radius from slider
*/
var radius = 0;

function showValue(newValue){
	document.getElementById("range").innerHTML=newValue*10;
	//window.alert(newValue);
	radius = newValue;
}

function getRadius(){
	return radius;
}

