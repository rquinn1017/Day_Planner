
var currHour = moment().format('HH');
// var currHour = 15

console.log(currHour);

$(document).ready(function() {

   
    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

 var loop = 0
$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  time= (moment(time,["hA"]).format("HH"));
  loop = loop + 1
 console.log(loop);

  if (time < currHour) 
  $("#"+loop).css('background-color', '#ffb2b2');

  else if (time > currHour) 
  $("#"+loop).css('background-color', '#b2d8b2');

  else if (time == currHour) 
  $("#"+loop).css('background-color', '#cccccc');

  console.log(time);

  });


});


