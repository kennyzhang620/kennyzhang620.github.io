// JavaScript source code

// Initialize the map.
var homeCoords = [49.27767013573553, -122.91268085603525];

var bingKey = "AvEQ1m7_88IHqh6gFAaKUTUuuqbz_zrvMU7HEEu_vX6qXguJOWIQk4WqS-01xSAq"
var txtFile = new XMLHttpRequest();
var parsedD = {};
var markers = []
var searchbar = document.getElementById("search");
var homebutton = document.getElementById("homebtn");
var map = L.map('map').setView(homeCoords, 13);
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



txtFile.open("GET", "https://kennyzhang620.github.io/vis_data.csv", false);
txtFile.onload = function (e) {
	if (txtFile.readyState === 4) {
		if (txtFile.status === 200) {
			var csvData = txtFile.responseText;

			parsedD = $.csv.toObjects(csvData);
		} else {
			console.error(txtFile.statusText);
		}
	}
};
txtFile.onerror = function (e) {
	console.error(txtFile.statusText);
};

txtFile.send();

console.log(parsedD);

function GeoCode(query) {
	var geocoderURL = "http://dev.virtualearth.net/REST/v1/Locations/" + query + "?" + "o=json&key=" + bingKey;

	var getLatLong = new XMLHttpRequest();
	var coords = [];

	console.log(geocoderURL);
	getLatLong.open("GET", geocoderURL, false);

	getLatLong.onload = function (e) {
		if (getLatLong.readyState == 4) {
			if (getLatLong.status == 200) {
				var data = JSON.parse(getLatLong.responseText);

				if (data.authenticationResultCode == "ValidCredentials") {
					var points = data.resourceSets;

					if (points.length > 0) {
						if (points[0].resources.length > 0) {
							if (points[0].resources[0].geocodePoints.length > 0) {
								if (points[0].resources[0].geocodePoints.length > 0)
								coords = points[0].resources[0].geocodePoints[0].coordinates;
                            }
                        }
                    }
				}
				
			}
			else {
				console.error(getLatLong.statusText);
            }
        }
	}

	getLatLong.onerror = function (e) {
		console.error(getLatLong.statusText);
	};

	getLatLong.send();

	return coords;
}

function filter() {
	for (var i = 0; i < parsedD.length; i++) {
		markers.push(L.circle([parsedD[i].latitude, parsedD[i].longitude], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.25,
			radius: 50
		}).addTo(map));

		var metadata = "Project: " + parsedD[i].Project;
		markers[i].bindPopup(metadata);
    }
}

filter();
console.log(GeoCode("SFU"));


//console.log(parsedD[0].latitude, parsedD[1].longitude);
search.addEventListener('keypress', function (keyin) {
	if (keyin.key === 'Enter') {
		var coords = GeoCode(search.value);

		if (coords != null && coords.length > 0)
			map.setView(coords, 15);
	}
});

homebutton.addEventListener('click', function (clicked) {
	map.setView(homeCoords, 15);
});


