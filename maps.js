var map;

function getCoor() {
    return coordinates;
}

function handle_files(files) {
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
                for (var dua = 0; dua < point.length; dua++) {
                    if (dua % 2 == 0) {
                        var latitude = point[dua];
                    } else {
                        var longitude = point[dua];
                        coordinates[count] = new google.maps.LatLng(latitude, longitude);
                        console.log(coordinates[count]);
                        count++;
                        window.alert(coordinates[count-1]);
                    }
                }
                var infowindow = new google.maps.InfoWindow();
                var marker, i;
                /*var locations = [];
                for (var c = 0; c < coordinates.length; c++) {
                    locations.push(coordinates[c]);
                    bounds.extend(coordinates[c]);
                }
                map.fitBounds(bounds);
                */
                var locations = [
                    ['Bondi Beach', 28.636523,77.224962, 4],
                    ['Coogee Beach', 30.636523,75.224962, 5],
                    ['Cronulla Beach', 32.636523,73.224962, 3],
                    ['Manly Beach', 34.636523,71.224962, 2],
                    ['Maroubra Beach', -33.950198, 151.259302, 1]
                ];
                for (var i = 0; i < coordinates.length; i++) {
                    window.alert(coordinates[i]);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(coordinates[i][0], coordinates[i][1]),
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            //infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
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
//var txtFile = "/Users/abhishekbind/Documents/nearbuy/Phase1/web/webappmap/test.txt";
/*var txtFile = "test.txt";
var file = new File(txtFile);

file.open("r"); // open file with read access
var str = "";
while (!file.eof) {
   // read each line of text
   str += file.readln() + "\n";
}
file.close();
window.alert(str);
*/
/*results = Papa.parse(file, {
    delimiter: ",",
    header: true,
    dynamicTyping: true
});
console.log(results);
*/
/*
InputStream instream = new FileInputStream("data/source.csv");
InputStreamReader inputreader = new InputStreamReader(instream);
BufferedReader reader= new BufferedReader(inputreader);
List<LatLng> latLngList = new ArrayList<LatLng>();
String line = "";

while( (line = reader.readLine()) != null) // Read until end of file
{
  double lat = Double.parseDouble(line.split(",")[0]);
  double lon = Double.parseDouble(line.split(",")[1]);
  latLngList.add(new LatLng(lat, lon));
}
var map = new google.maps.Map(document.getElementById('map'), { 
       mapTypeId: google.maps.MapTypeId.TERRAIN,
       zoom: 6
   });

// Add them to map
for(LatLng pos : latLngList)
{
  map.addMarker(new MarkerOptions()
        .position(pos)
        .title("Title!")); // Don't necessarily need title
}

var address = 'New Delhi, India';
var map = new google.maps.Map(document.getElementById('map'), { 
       mapTypeId: google.maps.MapTypeId.TERRAIN,
       zoom: 6
   });

   var geocoder = new google.maps.Geocoder();

   geocoder.geocode({
      'address': address
   }, 
   function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
         new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
         });
         map.setCenter(results[0].geometry.location);
      }
      else {
         // Google couldn't geocode this request. Handle appropriately.
      }
   });
   */