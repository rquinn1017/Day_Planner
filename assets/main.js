
console.log(moment().format('LTS'));

$(document).ready(function() {

    var row = $(".row-1").
    text
    ();

    var rowTime = moment(row, ["h"]).format("H:mm:ss A");

    console.log(rowTime);
    // console.log(moment(row, 'LT').format());

    // function getMomentFromTimeString(row) {
    //     var t = moment(str, 'HH:mm A');
    // }
    // var time = moment(row);
    // moment().toDate(row);
// console.log(row);
    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

//    var time = moment().toDate(".row-1").value;
//    console.log(time);

//     var detailsClass = document.getElementsByClassName("details");

//     $(detailsClass) .click(function(){
//       var myFunction = function() {
//         var time = this.toDate(".row").text;
//         // console.log(detailsClass);
//     };  
//     Array.from(detailsClass).forEach(function(element) {
//     console.log(detailsClass);
//       });
      
//       });

// var loop = $( ".row" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });

$( ".row" ).each(function( index ) {
  var time = ($( this ).text() );
  console.log(moment(time,["h"]).format("H:mm:ss A"));
  });

})


