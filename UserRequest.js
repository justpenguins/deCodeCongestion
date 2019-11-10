let uid = "123";
let busNo = "0";

//registers user
$('.submit_button').click(function(event) {
    console.log("hello world");
    let startPoint = $('#startPoint').val();
    let endPoint = $('#endPoint').val();

    let user = {
        "uid": uid,
        "startPt": startPoint,
        "endPt": endPoint,
        "busNo": busNo
    }

    //console.log(user);

    //record user to table
    //sends report info to database accident table
    $.ajax({
        url: 'register.php',
        method: 'POST',
        data: {
            "uid": uid,
            "startPt": startPoint,
            "endPt": endPoint,
            "busNo": busNo
        },
        success: function(data) {

        },
        error: function(data){

        }
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

    let user = {
        "uid": uid,
        "End Point": endPoint,
        "Start Point": startPoint,
        "Bus Number": busNumber
    }

    console.log(user);
    //make a call to update the user on the bus

    $.ajax({
        url: 'register.php',
        method: 'POST',
        data: {
            report
        },
        success: function(data) {

        },
        error: function(data){

        }
    });
});
