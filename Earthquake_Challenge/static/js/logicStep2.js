//////////////////////////////////////////////////////////////////////
// MODULE 13.6.2 - Add Earthquake Data to a Map
//////////////////////////////////////////////////////////////////////



// add the Leaflet layer API we want to use NOTICE DIFFERENCE WITH LINK ABOVE - THIS ONE HAS THE 'mapbox/streets-v11' INCLUDED
// INSTEAD OF THE {id} FIELD IN THE URL.
// TO GET THE CORRECT MAPBOX LAYER, GO TO MAPBOX DOCUMENTATION WEB-PAGE.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // add our access token
    accessToken: API_KEY
});

// Create the satellite view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Sattelite": satelliteStreets
  };


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Create a style for the lines.
let myStyle = {
    //fillColor: "#ffffa1",
    weight: 1
}


// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
    console.log(data);

    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius.
    function styleInfo(feature) {
        return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: "#ffae42",
        color: "#000000",
        // call the function to get the radius from the magnitude data
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
        };
    }



    // This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) {
        if (magnitude === 0) {
        return 1;
        }
        return magnitude * 4;
    }


    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        // Turn each feature into a circleMarker on the map.
        pointToLayer: function(feature, latlng) {
                    console.log(data);
                    return L.circleMarker(latlng);
                    },
                    style: styleInfo,
//        onEachFeature: function(feature, layer) {
//                console.log(layer);
//                layer.bindPopup("<h2> Airline: " + feature.properties.AREA_NAME 
//                + "</h2>");
//               }
             }
             )
  .addTo(map);
});

