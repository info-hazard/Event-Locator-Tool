var searchDisplay = document.getElementsByClassName('.form');
var fetchButton = document.getElementById('format')
var ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw"
var geolocatorURL = 'https://ipapi.co/postal/'

function displayEvents(data) {
  var eventsData = data._embedded.events
  
  for (var i = 0; i < eventsData.length; i++){
    var eventsearchEl = document.createElement('option');
    eventsearchEl.textContent = eventsData[i].events;
   $('.form').append(eventsearchEl);
  }
};
//fetch event search

$.ajax({
  type:"GET",
  url: ticketmasterURL,
  async:true,
  dataType: "json",
  success: function(data) {
              console.log(data);
            displayEvents(data);
              // Parse the response.
              // Do other things.
           },
          
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
           
});

fetchButton.addEventListener('click', displayEvents);

// calling geolocation API
$.ajax({
  url: geolocatorURL,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});
