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
        <link rel="stylesheet" href="style.css">
        <?php require 'db_connection.php' ?>
    </head>
    <body>
        <?php include 'header.php' ?>
        <img src="">

        <h1 id = "mainHeader">Transfer</h1>

        <form action="#">
            Starting point:<br>
                <input type="text" name="Start" value=""><br>
            Destination:<br>
                <input type="text" name="lastname" value=""><br><br>
            <input type="submit" value="Find My Route!">
        </form>
        <!--must find a place for the information inputted to go to (ie a .php file)-->
        <div class="results">
            <h3>Recommended Routes:</h3>
        </div>


        <?php include 'footer.php'?>

    </body>
</html>
