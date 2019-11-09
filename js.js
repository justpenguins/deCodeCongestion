

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
