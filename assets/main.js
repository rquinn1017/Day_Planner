
console.log(moment().format('LTS'));

$(document).ready(function() {

    var row = $(".row row-1").text;
    // var time = moment(row);
    console.log(row);

    var currentDate = moment().format("dddd, MMM Do YYYY");
    $("#today" ).text
    ( currentDate );

    // $(".content").click(function () {
    //     $(this).closest('div').find('.content').focus();
    // });



})