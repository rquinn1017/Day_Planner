var currDate = moment().format('L');
var currTime = moment().format('LTS');
var currDateTime = currDate + ", " + currTime;
console.log(currDateTime);


$(document).ready(function() {

    // var row = $(".row-1").
    // text
    // ();

    // var rowTime = moment(row, ["h"]).format("H:mm:ss A");
    // console.log(rowTime);


    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  time= (moment(time,["h"]).format("H:mm:ss A"));
  var dateTime = currDate + ", " + time;
  
  console.log(dateTime);

  console.log(moment(dateTime).isBefore(currDateTime));

  
  });


})


