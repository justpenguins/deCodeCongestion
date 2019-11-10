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
        data: user,
        success: function(data) {

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
