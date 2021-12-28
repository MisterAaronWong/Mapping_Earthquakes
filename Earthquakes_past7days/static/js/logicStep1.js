// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
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

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/MisterAaronWong/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
///let myStyle = {
  ////color: "#ffffa1",
  ////weight: 2
////}

// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson").then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// skill drill 13.5.3 - edit L.geoJson to add popup marker displaying all airports' codes and names

// skill drill 13.5.4 - edit L.geoJson to add popup marker displaying all airports' code & names for both Street and Dark layers

// skill drill 13.5.5 - edit L.geoJson to display default map layer as night with day nav as another option
// airline routes in light yellow with weight 2
// each airline route has a popup marker that shows its code and destination


// skill drill 13.5.6 - 
// make lines blue, weight 1
// polygon fill color yellow
// add a popup to show each neighborhood
// make default map layer Streets with Satellite Streets as the 2nd option