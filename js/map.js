var map;
var infoBubble;
var messageBubble;
var point;

function initMap() {
    var start = {lat: 54.352156, lng: 18.645932};
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: start,
        zoom: 15
    });

    infoBubble = new google.maps.InfoWindow({
        content: document.getElementById('info')
    });

    messageBubble = new google.maps.InfoWindow({
        content: document.getElementById('message')
    });
    
    google.maps.event.addListener(map, 'click', function(event) {
        point = new google.maps.Marker({
            position: event.latLng,
            map: map
        });

        google.maps.event.addListener(point, "click", function() {
        infoBubble.open(map, point);
        });
    });
}


function saveData() {
    infoBubble.close();
    messageBubble.open(map, point);
};

