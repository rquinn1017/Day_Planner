
var currHour = moment().format('HH');
// var currHour = 15

$(document).ready(function () {


  var currentDate = moment().format("dddd, MMM Do YYYY");
  $("#today").text
    (currentDate);

  var loop = 0
  $(".row").each(function (index) {
    var time = ($(this).text());
    time = (moment(time, ["hA"]).format("HH"));
    loop = loop + 1

    if (time < currHour)
      $("#" + loop).css('background-color', '#ffb2b2');

    else if (time > currHour)
      $("#" + loop).css('background-color', '#b2d8b2');

    else if (time == currHour)
      $("#" + loop).css('background-color', '#cccccc');

  });

  $('.save').hover(function () {
    $(this).css('cursor', 'pointer');
  })

  $('.save').click(function () {
    var row = $("#" + this.id);
    var rowNum = $(row).attr('id');
    var noteText = $("#" + rowNum).html();
    localStorage.setItem("details-" + rowNum, noteText);
    alert("Entry saved to local storage");
  })


  var storage = Object.entries(localStorage);

  var details1 = (localStorage.getItem("details-1")) || [];
  var details2 = (localStorage.getItem("details-2")) || [];
  var details3 = (localStorage.getItem("details-3")) || [];
  var details4 = (localStorage.getItem("details-4")) || [];
  var details5 = (localStorage.getItem("details-5")) || [];
  var details6 = (localStorage.getItem("details-6")) || [];
  var details7 = (localStorage.getItem("details-7")) || [];
  var details8 = (localStorage.getItem("details-8")) || [];
  var details9 = (localStorage.getItem("details-9")) || [];


  $(".details-1").html(details1);
  $(".details-2").html(details2);
  $(".details-3").html(details3);
  $(".details-4").html(details4);
  $(".details-5").html(details5);
  $(".details-6").html(details6);
  $(".details-7").html(details7);
  $(".details-8").html(details8);
  $(".details-9").html(details9);


});


