// Personal API accessToken for mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNqdXAiLCJhIjoiY2tta2xnMzVlMTI3YzJvazU1aWNhMGxwZCJ9.MO3V8FmEeHDglxe9Gx88-w';

// Create mapbox map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/lucasjup/ckn7yii990y2t17ohj9qfwko2',
  center: [4.3246038360562125, 52.06724691400936],
  zoom: 12
});

var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  types: 'country,region,place,postcode,locality,neighborhood',
  mapboxgl: mapboxgl
});

var longitude;
var latitude;
var airVisualData;

geocoder.on('result', function(response) {
  longitude = response.result.center[0];
  latitude = response.result.center[1];
  document.getElementById('longitudeSpan').innerHTML = longitude;
  document.getElementById('latitudeSpan').innerHTML = latitude;

  //Get data about the air on the location
  var request = 'https://api.airvisual.com/v2/nearest_city?lat=' + latitude + '&lon=' + longitude + '&key=d38f5f75-143f-45af-a9a0-3ea952fbda35';
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  //Fetch api
  fetch(request, requestOptions)
    // parse response to JSON format
    .then(function(airdata) {
    	return airdata.json();
    })
    //.then(result => console.log(result))
    .then(function(airdata) {
      // Process api data
      var temperature = airdata.data.current.weather.tp;
      var humidity = airdata.data.current.weather.hu;
      var aqius = airdata.data.current.pollution.aqius;

      // Fill html with api data
      document.getElementById('temperatureSpan').innerHTML = temperature;
      document.getElementById('humiditySpan').innerHTML = humidity;
      document.getElementById('polutionSpan').innerHTML = aqius;

      // Give description to AQI us number
      if (aqius < 51) {
        document.getElementById('polutionStatusSpan').innerHTML = "good";
      } else if (aqius < 101) {
        document.getElementById('polutionStatusSpan').innerHTML = "Moderate";
      } else if (aqius < 151) {
        document.getElementById('polutionStatusSpan').innerHTML = "Unhealthy for sensitive groups";
      } else if (aqius < 201) {
        document.getElementById('polutionStatusSpan').innerHTML = "Unhealthy";
      } else if (aqius < 301) {
        document.getElementById('polutionStatusSpan').innerHTML = "Very Unhealthy";
      } else if (aqius > 300) {
        document.getElementById('polutionStatusSpan').innerHTML = "Hazardous";
      }
    })
    .catch(error => console.log('error', error));
});

// console.log(response.result.center[0]);


// Add the geocoder to the map/
map.addControl(geocoder);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
