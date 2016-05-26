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

function testCircle(){
	var radius=showValue(newValue);
	window.alert(radius);
	for (var c = 0; c < markers.length; c++) {

        if (Distance(coordinates[c], center) <= radius) {
            markers[c].setMap(map);
        } else {
            markers[c].setMap(null);
        }
    }
}

