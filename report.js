//let uid = "123";

$('.report_button').click(function(event) {
    let routeNumber = $('#routeNumber').val();
    let busNumberOne = $('#busNumberOne').val();
    let busNumberTwo = $('#busNumberTwo').val();

    let report = {
        'busNo': localStorage.getItem("busNo"),
        'routeNumber': routeNumber,
        'busNumberOne': busNumberOne,
        'busNumberTwo': busNumberTwo
    }
    console.log(report);

    //sends report info to database accident table
    $.ajax({
        url: 'add_incident.php',
        method: 'POST',
        data: report,
        success: function(data) {
            alert("Report sent successfully.");
        },
        error: function(data){

        }
    });
});
