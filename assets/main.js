
var currHour = moment().format('HH');
var currHour = 15

// console.log(currHour);

$(document).ready(function() {

   
    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

 var loop = 0
$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  time= (moment(time,["hA"]).format("HH"));
  loop = loop + 1
//  console.log(loop);

  if (time < currHour) 
  $("#"+loop).css('background-color', '#ffb2b2');

  else if (time > currHour) 
  $("#"+loop).css('background-color', '#b2d8b2');

  else if (time == currHour) 
  $("#"+loop).css('background-color', '#cccccc');

  // console.log(time);

  });
  $('.save').hover(function() {
    $(this).css('cursor','pointer');
  })

  $('.save').click(function(){
    var rowNum = $("#" + this.id);
  console.log(rowNum);
  //   var noteText = $(".details-"+rowNum).attr("text");
  //   localStorage.setItem("Note"+rowNum, noteText);
  //   console.log(noteText)
  }
  
  )
  //need to add event listener for click in the details box and set the number of the row 
  
  
  // $('.save').click(function() {
  //   localStorage.setItem("mostRecentScore", score);

  
});


