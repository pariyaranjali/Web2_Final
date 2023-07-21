// start of map 
function initialize(){

	//initialzize the google map with 
var opt={
zoom:12,
center:new google.maps.LatLng(35.0306909,135.7790293),
mapTypeId: google.maps.MapTypeId.ROADMAP
};
//Get  the id of the div where we have to put our map
var mm=document.getElementById("mymap");

//create a new instance of a Google Maps object and display it on a web page.
map=new google.maps.Map(mm, opt);

//creates a new instance of a Google Maps marker and adds it to a map object.
var marker = new google.maps.Marker({
position: new google.maps.LatLng(35.0306909,135.7790293),
map: map,
title: "The Kyoto College of Graduate Studies for Informatics"
});

//creates a new instance of a Google Maps InfoWindow object called info
var info = new google.maps.InfoWindow({
content:"The Kyoto College of Graduate Studies for Informatics"
});

//sets up an event listener that triggers when a marker is clicked on the Google Map.
google.maps.event.addListener(marker, "click",
function(){info.open(opt, marker);});


}//End of initialize function


//sets up an event listener that triggers when the window has finished loading.
// The listener then calls the initialize function to initialize the Google Map.
google.maps.event.addDomListener(window, 'load', initialize)

// end of map 