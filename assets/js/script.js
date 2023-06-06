var searchButton = document.getElementById('submit');
var geoButton = document.getElementById('geo')
var geolocatorURL ='https://ipapi.co/json/';
var userCity =''

//search click function
var eventFunction = function(event) {
  event.preventDefault();
  var cityInput = searchButton.value.trim()
  if (renderCity){
    cityInput(displayEvents);
    searchButton.textContent = '';
  }
  else { 
    alert('Please Enter a city name');
  }};

function displayEvents(data) {
  var eventsData = data._embedded.events
  for (var i = 0; i < eventsData.length; i++){
    var eventTitle = eventsData[i].name
    var eventImg = eventsData[i].images[0].url
    var eventURL = eventsData[i].url
    var eventEl = `<div class="card" style="width: 300px;">
    <div class="card-divider">${eventTitle}</div>
    <img src="${eventImg}">
    <div class="card-section">
      <h4></h4>
      <a href=${eventURL}>Link for Details</a>
    </div>`

    $('.list-events').append(eventEl);
  }};

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
           }});
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

searchButton.addEventListener('click', fetchevents);
//saves location value on keyclick
$('#location').on('keyup',function(){
  userCity=$('#location').val()
  localStorage.setItem("city", userCity)
  console.log(userCity)
});

//renders user locations on button click
$(geoButton).on('click', function renderCity(city) {
  //setting value in html
  $('#location').val(userCity);
});


$("#location").val(localStorage.getItem("city"));


