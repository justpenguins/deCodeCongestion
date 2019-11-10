let uid = "unit1";

$('.submit_button').click(function(event) {
    let startPoint = $('#startPoint').val();
    let endPoint = $('#endPoint').val();
    let busNumber = $('#start').val();

    console.log({
        "uid": uid,
        "End Point": endPoint,
        "Start Point": startPoint,
        "Bus Number": busNumber
    });
});

$('.report_button').click(function(event) {
    let routeNumber = $('#routeNumber').val();
    let busNumberOne = $('#busNumberOne').val();
    let busNumberTwo = $('#busNumberTwo').val();

    let report = {
        'uid': uid,
        'routeNumber': routeNumber,
        'busNumberOne': busNumberOne,
        'busNumberTwo': busNumberTwo
    }
    console.log(report);

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
    let startPoint = $(this).find('.startPoint').text();
    let endPoint = $(this).find('.endPoint').text();
    let busNumber = $(this).find('.busNumber').text();

    //make a call to update the user on the bus
    console.log({
        "End Point": endPoint,
        "Start Point": startPoint,
        "Bus Number": busNumber
    });

});
