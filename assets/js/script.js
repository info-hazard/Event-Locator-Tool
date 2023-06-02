var searchDisplay = document.getElementsByClassName('.form');
var fetchButton = document.getElementById('submit');
var geolocatorURL ='https://ipapi.co/json/';
var eventURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=&apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";





function displayEvents(data) {
  var eventsData = data._embedded.events
  for (var i = 0; i < eventsData.length; i++){
    var event = eventsData[i].events 
    var eventTitle = `<div class="${event}">${event}</div>`;
    $('list-events').text(eventTitle);
   
  }
};
//search click function
var eventFunction = function(event) {
  event.preventDefault();
  var cityInput = fetchButton.value.trim()
  if (renderCity) {
    displayEvents(cityInput);
    fetchButton.textContent = '';
  }
  else { 
    alert('Please Enter a city name');
  }
}


//fetch event search
$.ajax({
  type:"GET",
  url: eventURL,
  async: true,
  dataType: "json",
  success: function(data) {
              console.log(data);
              displayEvents(data);
           },
          
  error: function(xhr, status, err) {
           }
           
});






// calling geolocation API
$.ajax({
  type:"GET",
  url: geolocatorURL,
  async: true,
  dataType: "json",
  success: function(response) {
              console.log(response);
              userCity = response.city
              renderCity(response.city)
              console.log("city: " + userCity)
           },
  error: function(xhr, status, err) {
           }
});

// rendering city
function renderCity(city) {
  //setting value in html
  $('#location').val(city);
}

fetchButton.addEventListener('click', displayEvents);