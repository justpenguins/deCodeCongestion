let uid = "123";
var startPoint = "";
var endPoint = "";

//registers user
$('.submit_button').click(function(event) {
    console.log("hello world");
    startPoint = $('#startPoint').val();
    endPoint = $('#endPoint').val();

    $.ajax({
        url: 'findRoute.php',
        method: 'GET',
        data: {
            startPoint: startPoint,
            endPoint: endPoint
        },
        success: function(data) {
            console.log(data);

            //ALL Routes
            let dataArray = data.split("-");
            dataArray.pop();

            console.log(dataArray);

            //THEN
            for (let route of dataArray){
                let busRoute = route.split(":")[0];
                let busNo = route.split(":")[1];

                let style = "<div class='alternativeRoute'>"
                    + "<div><h3>Bus Route: </h3><span class='busRoute'>" + busRoute + "</span></div>"
                    + "<div><h3>Bus Number: </h3><span class='busNo'>" + busNo + "</span></div>";
                    + "</div>"
                $('.response').append(style);
            }
            //
        },
        error: function(data){

        }
    });

    // let user = {
    //     "uid": uid,
    //     "startPt": startPoint,
    //     "endPt": endPoint,
    //     "busNo": busNo
    // }

    //console.log(user);
    //record user to table
    //sends report info to database accident table
    // $.ajax({
    //     url: 'register.php',
    //     method: 'POST',
    //     data: user,
    //     success: function(data) {
    //         console.log(data);
    //     },
    //     error: function(data){
    //
    //     }
    // });
});

$(document).on('click', '.alternativeRoute' , function() {
    let busRoute = $(this).find('.busRoute').text();
    let busNo = $(this).find('.busNo').text();

    let user = {
        "uid": uid,
        "startPt": startPoint,
        "endPt": endPoint,
        "busRoute": busRoute,
        "busNo": busNo
    }

    console.log(user);
    //make a call to update the user on the bus

    $.ajax({
        url: 'register.php',
        method: 'POST',
        data: user,
        success: function(data) {
            // console.log("Worked");
        },
        error: function(data){

        }
    });
});
