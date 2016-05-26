/*
	Gets the radius from slider
*/
var radius = 0;

function showValue(newValue){
	var scale = 1000; 
	document.getElementById("range").innerHTML=newValue*scale;
	radius = newValue*scale;
}

function getRadius(){
	return radius;
}

function testCircle(){
	for (var c = 0; c < markers.length; c++) {
		
        if (Distance(coordinates[c], center) <= getRadius()) {
            markers[c].setMap(map);
        } else {
            markers[c].setMap(null);
        }
    }
}

