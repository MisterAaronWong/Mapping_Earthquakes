// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// assigning the variable map to the object L.map(),
// and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, 
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5).
// We set the zoom level of "4" on a scale 0–18.
// An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// Create the map object with a center and zoom level.
//// let map = L.map("mapid", {
    //// center: [
      //// 40.7, -94.5
    //// ],
    //// zoom: 4
  //// });
// This method is useful when we need to add multiple tile layers
// or a background image of our map(s)

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });

// skill drill 13.4.2
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: 'orange',
    fillColor: 'orange',
    weight: 4,
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
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