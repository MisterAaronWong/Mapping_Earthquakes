// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
////let map = L.map('mapid').setView([30, 30], 2);
// assigning the variable map to the object L.map(),
// and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, 
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5).
// We set the zoom level of "4" on a scale 0–18.
// An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// Create the map object with a center and zoom level.
////let map = L.map("mapid", {
    ////center: [
    ////40.7, -94.5
    ////],
    ////zoom: 4
  ////});
// This method is useful when we need to add multiple tile layers
// or a background image of our map(s)

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
////L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data. (pointToLayer)
////L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  ////pointToLayer: function(feature, latlng) {
    ////console.log(feature);
    ////return L.marker(latlng)
    ////.bindPopup("<h2>" + feature.properties.city + "</h2>");
  ////}

////}).addTo(map);

// Grabbing our GeoJSON data (onEachFeature)
////L.geoJSON(sanFranAirport, {
  ////onEachFeature: function(feature, layer) {
    ////console.log(layer);
    ////layer.bindPopup();
  ////}
////}).addTo(map);

//13.5.2 skill drill
////L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  ////pointToLayer: function(feature, latlng) {
    ////console.log(feature);
    ////return L.marker(latlng)
    ////.bindPopup("<h2>" + feature.properties.name + "</h2>")
    ////.bindPopup("<h2>" + feature.properties.city + feature.properties.country + "</h2>");
  ////}

////}).addTo(map);

// Skill drill 13.5.2

// Coordinates for each point to be used in the line.
////let line = [
  ////[33.9416, -118.4085],
  ////[37.6213, -122.3790],
  ////[40.7899, -111.9791],
  ////[47.4502, -122.3088]
////];

// Create a polyline using the line coordinates and make the line red.
////L.polyline(line, {
  ////color: "yellow"
////}).addTo(map);

// 13.4.3 skill drill
// Coordinates for each point to be used in the line.
////let line1 = [
  ////[37.6213, -122.3790],
  ////[30.1975, -97.6664],
  ////[43.6777, -79.6248],
  ////[40.6413, -73.7781]
////];

// Create a polyline using the line coordinates and make the line red.
////L.polyline(line1, {
  ////color: "blue",
  ////weight: 4,
  ////opacity: 0.5,
  ////dashArray: '20, 20',
  ////dashOffset: '0'
////}).addTo(map);

// Get data from cities.js
////let cityData = cities;

// Loop through the cities array and create one marker for each city.
////cityData.forEach(function(city) {
  ////console.log(city)
  ////L.circleMarker(city.location, {
    ////radius: city.population/100000,
  ////})
  ////.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  ////.addTo(map);
 ////});

// skill drill 13.4.2
////cityData.forEach(function(city) {
  ////console.log(city)
  ////L.circleMarker(city.location, {
    ////radius: city.population/200000,
    ////color: 'orange',
    ////fillColor: 'orange',
    ////weight: 4,
  ////})
  ////.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  ////.addTo(map);
 ////});

////L.circle([34.0522, -118.2437], {
  ////radius: 100
////}).addTo(map);

////// Skill drill 13.4.1
////L.circle([34.0522, -118.2437], {
  ////color: 'black',
  ////fillColor: 'yellow',
  ////radius: 300
////}).addTo(map);


////L.circleMarker([34.0522, -118.2437], {
  ////radius: 300,
  ////color: 'black',
  ////fillColor: '#ffffa1'
////}).addTo(map);

// add the map tile layer method
// the tile layer is used to load and display a tile layer on the map.
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
///streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets
// Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
// URLs appear in the parentheses of our tileLayer() method:
// The API URL with a reference to the accessToken
// The OpenStreetMap URL inside the curly braces of our tileLayer() method
// We add the maxZoom attribute and assign it a value of 18.
// We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
// We add the accessToken attribute and assign it the value of our API_KEY
//Finally, we call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() function will add the graymap object tile layer to our let map.
// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/MisterAaronWong/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/MisterAaronWong/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
    + feature.properties.dst + "</h3>");
  }
}).addTo(map);
});

// skill drill 13.5.3 - edit L.geoJson to add popup marker displaying all airports' codes and names

// skill drill 13.5.4 - edit L.geoJson to add popup marker displaying all airports' code & names for both Street and Dark layers

// skill drill 13.5.5 - edit L.geoJson to display default map layer as night with day nav as another option
// airline routes in light yellow with weight 2
// each airline route has a popup marker that shows its code and destination