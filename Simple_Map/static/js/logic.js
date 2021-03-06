//////////////////////////////////////////////////////////////////////
// MODULE 13.2.4 - Create a Simple Map
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
let map = L.map('mapid').setView([40.7, -94.5], 4);


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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,

    // add our access token
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);