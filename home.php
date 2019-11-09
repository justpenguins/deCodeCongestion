<?php
    if ($_GET['alert']){
        echo "Unexpected congestion on this route.<br>";
    }

    /*<?php echo $_GET['alert']; ?>*/

    //exit();
?>


<!DOCTYPE html>
<html>
    <head>
        <title>deCodeCongestion</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        {% include "header.php" %}
        <h1>Decode Congestion</h1>
        <p>We suggest</p>

        {% include "foot.php"%}

    </body>
</html>
