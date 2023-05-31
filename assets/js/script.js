var searchDisplay = document.getElementsByClassName('.form');
var fetchButton = document.getElementById('format');
var geolocatorURL ='https://ipapi.co/json/';
var postalcodeURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=&apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";


function displayEvents(data) {
  var eventsData = data._embedded.events
  for (var i = 0; i < eventsData.length; i++){
    var genre = eventsData[i].classifications[0].subGenre.name  //country
    var option = `<option value="${genre}">${genre}</option>`;
    //<option value="country">Country</option>
    $('#format').append(option);
    
  }
};

//fetch event search
$.ajax({
  type:"GET",
  url: postalcodeURL,
  async: true,
  dataType: "json",
  success: function(data) {
              console.log(data);
              displayEvents(data);
           },
          
  error: function(xhr, status, err) {
           }
           
});

//fetchButton.addEventListener('click', displayEvents);




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