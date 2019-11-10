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
            'uid': uid,
            'routeNumber': routeNumber,
            'busNumberOne': busNumberOne,
            'busNumberTwo': busNumberTwo
        },
        success: function(data) {
            alert("Report sent successfully.");
        },
        error: function(data){

        }
    });
});
