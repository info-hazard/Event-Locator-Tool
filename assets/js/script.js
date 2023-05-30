var searchDisplay = document.getElementsByClassName('.form');
var fetchButton = document.getElementById('format');
var eventsURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";
var eventDetails = "https://app.ticketmaster.com/discovery/v2/attractions/K8vZ9175BhV.json?apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";
var geolocatorURL ='https://ipapi.co/postal/'


function displayEvents(data) {
  var eventsData = data._embedded.attractions
  for (var i = 0; i < eventsData.length; i++){
    var eventsearchEl = document.createElement('option');
    eventsearchEl.textContent = eventsData[i].attractions;
    $('.form').append(eventsearchEl);
  }
};

//fetch event search
$.ajax({
  type:"GET",
  url: eventsURL,
  async: true,
  dataType: "json",
  success: function(data) {
              console.log(data);
              displayEvents(data);
           },
          
  error: function(xhr, status, err) {
           }
           
});

fetchButton.addEventListener('click', displayEvents);



//function to Display events with detail info.
$.ajax({
  type:"GET",
  url:eventDetails,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
           },
  error: function(xhr, status, err) {
           }
});


function eventInfo(json) {
  var eventInfo = json.name.classifications
  for (var i=0; i < eventInfo.length; i++){
    
  }
}

// calling geolocation API
$.ajax({
  type:"GET",
  url: geolocatorURL,
  async: true,
  dataType: "json",
  success: function(response) {
              console.log(response);
           },
  error: function(xhr, status, err) {
           }
});

