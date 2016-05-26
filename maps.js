var map;
var markers = [];
var check=0;

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
setMapOnAll(null);
}

function getCoor() {
    return coordinates;
}

/*
    Handle input files and show them in Map
*/
function handle_files(files) {
    //clearMarkers();
    var center = new google.maps.LatLng(28.636523, 77.224962);
    for (i = 0; i < files.length; i++) {
        file = files[i];
        console.log(file);
        var reader = new FileReader();
        ret = [];
        reader.onload = function(e) {
            console.log(e.target.result);
            var lines = e.target.result.split('\n');
            var bounds = new google.maps.LatLngBounds();
            for (var line = 0; line < lines.length; line++) {

                var point = lines[line].split(',');

                var count = 0;
                var coordinates = [];
                var infowindow = new google.maps.InfoWindow();
                var marker, i;

                /*for (var dua = 0; dua < point.length; dua++) {
                    if (dua % 2 == 0) {
                        var latitude = point[dua];
                    } 
                    else {
                        var longitude = point[dua];
                        coordinates[count] = new google.maps.LatLng(latitude, longitude);
                        console.log(coordinates[count]);
                        //if(Distance(coordinates[count],center)<=getRadius())
                        {
                            marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latitude, longitude),
                            map: map
                            });
                            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                //infowindow.setContent(locations[i][0]); // shows info about locations
                                infowindow.open(map, marker);
                            }
                            })(marker, i));
                            markers[count]=marker;
                        }
                        count++;
                    }
                }*/
                if (check == 0) {
                        for (var dua = 0; dua < point.length; dua++) {
                            if (dua % 2 == 0) {
                                var latitude = point[dua];
                            } else {
                                var longitude = point[dua];
                                coordinates[count] = new google.maps.LatLng(latitude, longitude);
                                console.log(coordinates[count]);
                                marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(latitude, longitude),
                                    map: map
                                });
                                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                    return function() {
                                        //infowindow.setContent(locations[i][0]); // shows info about locations
                                        infowindow.open(map, marker);
                                    }
                                })(marker, i));
                                markers[count] = marker;
                                count++;
                            }
                        }
                        check = 1;
                    }

                for (var c = 0; c < markers.length; c++) {
                    if (Distance(coordinates[c], center) <= getRadius()) {
                        markers[c].setMap(map);
                    } else {
                        markers[c].setMap(null);
                    }
                }
            var locations = [];
                for (var c = 0; c < coordinates.length; c++) {
                    locations.push(coordinates[c]);
                    bounds.extend(coordinates[c]);
                }
                map.fitBounds(bounds);
            }
        
        }
        reader.onerror = function(stuff) {
            console.log("error", stuff);
            console.log(stuff.getMessage());
        }
        reader.readAsText(file); //readAsdataURL
    }

}

function initialize() {

    var mapProp = {

        center: new google.maps.LatLng(28.636523, 77.224962),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);
/*
var map;
var markers = [];
var check = 0;

    //Handle input files and show them in Map

function handle_files(files) {
    //window.alert("handle_files");
    var center = new google.maps.LatLng(28.636523, 77.224962);
    for (i = 0; i < files.length; i++) {
        {
            file = files[len];
            console.log(file);
            var reader = new FileReader();
            ret = [];
            reader.onload = function(e) {
                console.log(e.target.result);
                var lines = e.target.result.split('\n');
                var bounds = new google.maps.LatLngBounds();
                for (var line = 0; line < lines.length; line++) {

                    var point = lines[line].split(',');

                    var count = 0;
                    var coordinates = [];
                    var infowindow = new google.maps.InfoWindow();
                    var marker, i;

                    if (check == 0) {
                        for (var dua = 0; dua < point.length; dua++) {
                            if (dua % 2 == 0) {
                                var latitude = point[dua];
                            } else {
                                var longitude = point[dua];
                                coordinates[count] = new google.maps.LatLng(latitude, longitude);
                                console.log(coordinates[count]);
                                marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(latitude, longitude),
                                    map: map
                                });
                                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                    return function() {
                                        //infowindow.setContent(locations[i][0]); // shows info about locations
                                        infowindow.open(map, marker);
                                    }
                                    google.maps.event.addListener(marker, )
                                })(marker, i));
                                markers[count] = marker;
                                count++;
                            }
                        }
                        check = 1;
                    }

                    for (var c = 0; c < markers.length; c++) {
                        if (Distance(coordinates[c], center) <= getRadius()) {
                            markers[c].setMap(map);
                        } else {
                            markers[c].setMap(null);
                        }
                    }

                    var locations = [];
                    for (var c = 0; c < coordinates.length; c++) {
                        locations.push(coordinates[c]);
                        bounds.extend(coordinates[c]);
                    }
                    map.fitBounds(bounds);
                }

            }
            reader.onerror = function(stuff) {
                console.log("error", stuff);
                console.log(stuff.getMessage());
            }
            reader.readAsText(file); //readAsdataURL
        }

    }

    function initialize() {

        var mapProp = {

            center: new google.maps.LatLng(28.636523, 77.224962),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    */