var searchDisplay = document.getElementsByClassName('.form');
var fetchButton = document.getElementById('format');
var eventsURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";
var eventDetails = "https://app.ticketmaster.com/discovery/v2/attractions/K8vZ9175BhV.json?apikey=HLtESgDRQC62k8RSusY2rKZAWIYZkVAw";

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


//function to Display events with detail info.

$.ajax({
  type:"GET",
  url:eventDetails,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});


function eventInfo(json) {
  var eventInfo = json.name.classifications
  for (var i=0; i < eventInfo.length; i++){
    
  }
}
