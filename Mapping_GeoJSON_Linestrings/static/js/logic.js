//////////////////////////////////////////////////////////////////////
// MODULE 13.5.2 - Map GeoJSON Point Type
//////////////////////////////////////////////////////////////////////


// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// We're assigning the variable map to the object L.map(), 
// and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element 
// on the index.html file.
// The setView() method sets the view of the map with a 
// geographical center, where the first coordinate is latitude 
// (40.7) and the second is longitude (-94.5). We set the zoom 
// level of "4" on a scale 0–18.
//      let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Add GeoJSON data.
//   let sanFranAirport =
//   {"type":"FeatureCollection","features":[{
//       "type":"Feature",
//       "properties":{
//           "id":"3469",
//           "name":"San Francisco International Airport",
//           "city":"San Francisco",
//           "country":"United States",
//           "faa":"SFO",
//           "icao":"KSFO",
//           "alt":"13",
//           "tz-offset":"-8",
//           "dst":"A",
//           "tz":"America/Los_Angeles"},
//           "geometry":{
//               "type":"Point",
//               "coordinates":[-122.375,37.61899948120117]}}
//   ]};



// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([30 , 30], 2);


// Grabbing our GeoJSON data.
//    L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data using pointToLayer.
//   L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    //   pointToLayer: function(feature, latlng) {
      //   console.log(feature);
      //   return L.marker(latlng)
      //.bindPopup("<h2>" + feature.properties.city + "</h2>");
      // SKIL DRILL - Edit your logic.js to create a popup 
      // marker for San Francisco Airport on a night preview 
      // navigation map. When you click on the popup, it will 
      // display the city, state, and the name of the airport.
      //   .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ",  " + feature.properties.country + "</h3>");
    //   }

//     }).addTo(map);


// Grabbing our GeoJSON data using onEachFeature.
//   L.geoJson(sanFranAirport, {
      // We turn each feature into a marker on the map.
//       onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//       }
//
//     }).addTo(map);








// Coordinates for each point to be used in the line.
//    let line = [
//       [33.9416, -118.4085],
//        [37.6213, -122.3790]
//      ];

// Create a polyline using the line coordinates and make the line red.
//    L.polyline(line, {
//        color: "red"
//      }).addTo(map);



// Coordinates for each point to be used in the polyline.
//    let lines = [
//        [33.9416, -118.4085],
//        [37.6213, -122.3790],
//        [40.7899, -111.9791],
//        [47.4502, -122.3088]
//      ];

// Create a polyline using the line coordinates and make the line black.
//    L.polyline(lines, {
//        color: "yellow"
//    }).addTo(map);




// Add a simple marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
//    let cityData = cities;


// Loop through the cities array and create one marker for each city.
//    cityData.forEach(function(city) {
 //       console.log(city)
    // add markers for each city and make radius = population size/100000 
    // so that circles are not too large
//        L.circleMarker(city.location, {
//            radius: city.population/100000,
//            color: "orange",
//            fillColor: "orange"
//        })
    // add popup with the bindPopup attribute with city name, state as a heading 2
    // a horizontal line and population as a header 3 and format
    // the population with thousands separator by using the 'toLocaleString()' method.
//        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//        .addTo(map)
//    });


// Add a circle using the L.circle method to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
    //// radius is expressed in meters
    // radius: 100
    // }).addTo(map);

// Add a circle marker using the L.circleMarker to the map
/// L.circleMarker([34.0522, -118.2437], {
    // radius is expressed in pixels
    ///radius: 300,
    // border color black
    ///color: "black",
    // fill color yellow
    ///fillColor: '#ffffa1'
    ///}).addTo(map);



// We create the tile layer that will be the background of our map.

// add the Leaflet layer API we want to use
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // maxZoom: 18,
    // To change the map's style, change the map id using the list of Mapbox ids below:
    // - mapbox/streets-v11
    // - mapbox/outdoors-v11
    // - mapbox/light-v10
    // - mapbox/dark-v10
    // - mapbox/satellite-v9
    // - mapbox/satellite-streets-v11
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    //zoomOffset: -1,

    


// add the Leaflet layer API we want to use NOTICE DIFFERENCE WITH LINK ABOVE - THIS ONE HAS THE 'mapbox/streets-v11' INCLUDED
// INSTEAD OF THE {id} FIELD IN THE URL.
// TO GET THE CORRECT MAPBOX LAYER, GO TO MAPBOX DOCUMENTATION WEB-PAGE.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// Change the map layer to 'dark-v10' by changing the url
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,

    // add our access token
    accessToken: API_KEY
});

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
    layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/IJG-DR/Mapping_Earthquakes/main/torontoRoutes.json";


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
                console.log(layer);
                layer.bindPopup("<h2> Airline: " + feature.properties.airline 
                + "</h2> <hr> <h3>Destination: " + feature.properties.dst 
                + "</h3>");
               }
             })
  .addTo(map);
});


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);