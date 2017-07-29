var map;
var infoBubble;
var messageBubble;
var point;
var infoWindow;
var mapstyles;

function initMap() {
    var start = {lat: 54.352156, lng: 18.645932};
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: start,
        zoom: 15,
        mapTypeControl: false,
        styles: mapstyles
    });
    infoWindow = new google.maps.InfoWindow;

    // Bubble window 
    infoBubble = new google.maps.InfoWindow({
        content: document.getElementById('info')
    });

    messageBubble = new google.maps.InfoWindow({
        content: document.getElementById('message')
    });
    
    var image = 'images/marker.png';

    google.maps.event.addListener(map, 'click', function(event) {
        point = new google.maps.Marker({
            position: event.latLng,
            map: map,
            icon: image
        });

        google.maps.event.addListener(point, "click", function() {
        infoBubble.open(map, point);
        });
    });

    // Geolocation 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            setTimeout('infoWindow.close()', 1500);
        }, function() {
            handleLocationError(true, infoWindow, map.gerCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function saveData() {
    infoBubble.close();
    messageBubble.open(map, point);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation. ');
    infoWindow.open(map);
    setTimeout('infoWindow.close()', 4000)
}

mapstyles = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0090ee"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": "13"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-26"
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "21"
            },
            {
                "saturation": "53"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "55"
            },
            {
                "lightness": "2"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "31"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "-2"
            },
            {
                "saturation": "7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-10"
            },
            {
                "saturation": "57"
            },
            {
                "gamma": "0.95"
            },
            {
                "color": "#0081e5"
            }
        ]
    }
]

