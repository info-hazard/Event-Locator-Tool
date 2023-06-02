
var fetchButton = document.getElementById('submit');
var geolocatorURL ='https://ipapi.co/json/';
var userCity =''



//search click function
var eventFunction = function(event) {
  event.preventDefault();

  var cityInput = fetchButton.value.trim()
  if (renderCity){
    cityInput(displayEvents);
    fetchButton.textContent = '';
  }
  else { 
    alert('Please Enter a city name');
  }
};

function displayEvents(data) {
 
  var eventsData = data._embedded.events
  for (var i = 0; i < eventsData.length; i++){
    var eventTitle = eventsData[i].name
    var eventEl = `<div class="">${eventTitle}</div>`;
    $('.list-events').append(eventEl);
   
  }
};





function fetchevents(event){
  event.preventDefault()
  var eventURL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=${userCity}&apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw`;
  console.log('clicked')
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

}



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
};

fetchButton.addEventListener('click', fetchevents);
$('#location').on('keyup',function(){
  userCity=$('#location').val()
  console.log(userCity)
});