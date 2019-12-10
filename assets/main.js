
var currHour = moment().format('HH');

console.log(currHour);

$(document).ready(function() {

   
    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  time= (moment(time,["hA"]).format("HH"));
  
 
  
  console.log(time);


  if (time < currHour) 
  $(".details").css('background-color', 'red');

  else if (time > currHour) console.log("green")

  else if (time === currHour) console.log('grey')

  
  });


})


