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
          }
        }
        var myTrip = [];
        for (var c = 0; c < coordinates.length; c++) {
          myTrip.push(coordinates[c]);
          bounds.extend(coordinates[c]);
        }
        map.fitBounds(bounds);

        //console.log(myTrip);
        var flightPath = new google.maps.Polyline({
          path: myTrip,
          strokeColor: "#0000FF",
          strokeOpacity: 0.8,
          strokeWeight: 8
        });

        flightPath.setMap(map);

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

    center: new google.maps.LatLng(28.636523,77.224962),
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
*//*
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
