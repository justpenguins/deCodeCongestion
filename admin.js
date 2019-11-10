setInterval(userOnBus, 1000); //check the changes every second

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
