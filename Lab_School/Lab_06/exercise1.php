<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <title>Document</title>
</head>

<body>
    <table class="table">
        <thead class="thead-dark">
            <h3 class="text-center">Bảng cửu chương</h3>
        </thead>
        <tbody>
            <?php
                for($i = 1; $i <= 10; $i++){
                    echo "<tr>";
                    for ($j = 1; $j <= 10; $j++){
                        echo "<th>
                        $i x $j =".$i * $j.
                        "</th>";
                    }
                    echo "</tr>";
                }  
            ?>

        </tbody>
    </table>
</body>

</html>