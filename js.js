let uid = "unit1";
let endPoint = $('#endPoint').val();
let startPoint = $('#startPoint').val();
let busNumber = $('#start').val();

$('.submit_button').click(function(event) {
    console.log({
        "uid": uid,
        "End Point": endPoint,
        "Start Point": startPoint,
        "Bus Number": busNumber
    });
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
    let endPoint = $(this).find('.endPoint').text();
    let startPoint = $(this).find('.startPoint').text();
    let busNumber = $(this).find('.busNumber').text();

    //make a call to update the user on the bus
    console.log({
        "End Point": endPoint,
        "Start Point": startPoint,
        "Bus Number": busNumber
    });
});

//user on bus is done on the php to show all bus number
setInterval(userOnBus, 1000);

function userOnBus(){
    //go grab the user table
    $.ajax({
        url: 'userOnBus.php',
        method: 'GET',
        success: function(data) {

        },
        error: function(data){

        }
    });
}
