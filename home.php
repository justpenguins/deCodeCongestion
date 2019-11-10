<?php
    // if ($_GET['alert']){
    //     echo "Unexpected congestion on this route.<br>";
    // }

    /*<?php echo $_GET['alert']; ?>*/
    //exit();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>deCodeCongestion Main</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="UserRequest.js" defer></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        
        <img src="">

        <h1 id = "mainHeader">Transfer</h1>

        <form >
            Starting point:<br>
                <input type="text" name="Start" id="startPoint"><br>
            Destination:<br>
                <input type="text" name="End" id="endPoint"><br><br>

        </form>
        <button class="submit_button">Find My Route</button>
        <!--must find a place for the information inputted to go to (ie a .php file)-->
        <div class="results">
            <h3>Recommended Routes:</h3>
            <form class="response"></form>
        </div>


        <?php include 'footer.php'?>

    </body>
</html>
