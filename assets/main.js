
var currHour = moment().format('HH');
// var currHour = 15

$(document).ready(function() {

   
    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

 var loop = 0
$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  time= (moment(time,["hA"]).format("HH"));
  loop = loop + 1

  if (time < currHour) 
  $("#"+loop).css('background-color', '#ffb2b2');

  else if (time > currHour) 
  $("#"+loop).css('background-color', '#b2d8b2');

  else if (time == currHour) 
  $("#"+loop).css('background-color', '#cccccc');

  });
  
  $('.save').hover(function() {
    $(this).css('cursor','pointer');
  })

  $('.save').click(function(){
    var row = $("#" + this.id);
    var rowNum = $(row).attr('id');
    var noteText = $("#"+rowNum).html();
    localStorage.setItem("note "+rowNum, noteText);

  }
  
  )
  
  
});


