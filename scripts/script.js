var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60
});

subjectInput = document.getElementById("subject");
emailInput = document.getElementById("email");
messageInput = document.getElementById("message");
sendButton = document.getElementById("submitButton");

sendButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    var http = new XMLHttpRequest();
    var url = "https://cv-mailer.herokuapp.com/email/send";
    var params = "subject=" + subjectInput.value + "&from=" + emailInput.value + "&message=" + messageInput.value;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }

    http.send(params);
    console.log("sended", params);
});

// Add Google Maps
function initMap() {
    var customMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": 1
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": 0.8
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        ], {
      name: 'Styled'
    });
    var customMapTypeId = 'custom_style';
  
    var latLng = {
      lat: 55.7547585,
      lng: 37.6038036
    };
  
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: latLng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    });
  
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
  
  }