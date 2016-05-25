var map;

function getCoor() {
    return coordinates;
}
/*
    Handle input files and show them in Map
*/
function handle_files(files) {
    var center=new google.maps.LatLng(28.636523, 77.224962);
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

                for (var dua = 0; dua < point.length; dua++) {
                    if (dua % 2 == 0) {
                        var latitude = point[dua];
                    } else {
                        var longitude = point[dua];
                        coordinates[count] = new google.maps.LatLng(latitude, longitude);
                        console.log(coordinates[count]);
                        //window.alert(getRadius());
                        window.alert(Distance(coordinates[count],center));
                        if(Distance(coordinates[count],center)<=getRadius())
                        {
                            marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latitude, longitude),
                            map: map
                            });

                            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                //infowindow.setContent(locations[i][0]);
                                infowindow.open(map, marker);
                            }
                            })(marker, i));
                        }
                        count++;
                    }
                }
                var locations = [];
                for (var c = 0; c < coordinates.length; c++) {
                    locations.push(coordinates[c]);
                    bounds.extend(coordinates[c]);
                }
                map.fitBounds(bounds);
                /*var locations = [
                    ['Bondi Beach', 28.636523,77.224962, 4],
                    ['Coogee Beach', 30.636523,75.224962, 5],
                    ['Cronulla Beach', 32.636523,73.224962, 3],
                    ['Manly Beach', 34.636523,71.224962, 2],
                    ['Maroubra Beach', -33.950198, 151.259302, 1]
                ];
                for (var i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            //infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }*/
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

