let endPoint = $('#endPoint').val();
let startPoint = $('#startPoint').val();
let busNumber = $('#start').val();

$('.submit_button').click(function(event) {
    console.log("Hello World");
});

$('.report_button').click(function(event) {
    console.log("Hello World");

    let routeNumber = $('#routeNumber').val();
    let busNumberOne = $('#busNumberOne').val();
    let busNumberTwo = $('#busNumberTwo').val();

    //sends report info to database accident table
});

$(document).on('click', '.alternativeRoute' , function() {
    let endPoint = $(this).find('.endPoint').text();
    let startPoint = $(this).find('.startPoint').text();
    let busNumber = $(this).find('.busNumber').text();
});
