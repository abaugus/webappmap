var txtFile = "source.csv";
var file = new File(txtFile);

file.open("r"); // open file with read access
var str = "";
while (!file.eof) {
   // read each line of text
   str += file.readln() + "\n";
}
file.close();
alert(str);

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
