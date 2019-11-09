let uid = "unit1";
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

    let report = {
        'uid': uid,
        'routeNumber': routeNumber,
        'busNumberOne': busNumberOne,
        'busNumberTwo': busNumberTwo
    }

    //sends report info to database accident table
    $.ajax({
        url: 'report.php',
        method: 'POST',
        data: {
            report
        },
        success: function(data) {
            alert("Report sent successfully.");
        },
        error: function(data){

        }
    });
});

$(document).on('click', '.alternativeRoute' , function() {
    let endPoint = $(this).find('.endPoint').text();
    let startPoint = $(this).find('.startPoint').text();
    let busNumber = $(this).find('.busNumber').text();

    //make a call to update the user on the bus


});
