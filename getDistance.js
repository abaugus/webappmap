/* 
	Shows the distance between two LatLng
	->Add arguments
*/
function Distance(){
	var p1 = new google.maps.LatLng(40.718119, -73.995667);
	var p2 = new google.maps.LatLng(51.499981, -0.125313);
	var dist = google.maps.geometry.spherical.computeDistanceBetween(p1,p2);
	window.alert(dist);
}

