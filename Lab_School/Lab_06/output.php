<?php
  session_start();

  $name = $_SESSION['name'];
  $email = $_SESSION['email'];
  $system = $_SESSION['system'];
  $gender = $_SESSION['gender'];

  if(!empty($_SESSION['favorite_ide'])){
    $favorite_ide = $_SESSION['favorite_ide'];

  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Document</title>
    <style>
    .container {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: green;
    }

    .label {
        font-size: 20px;
        font-weight: 500;
    }

    .value {
        margin-top: 0.2rem;
        color: green;
    }
    </style>
</head>

<body>
    <div class="container m-4 p-4 border border-dark rounded">
        <h1>Confirm Information</h1>
        <div class="info-section">
            <div>
                <div class="label">Your name</div>
                <div class="value">
                    <?php echo $name ?>
                </div>
            </div>
            <div>
                <div class="label">Your email</div>
                <div class="value">
                    <?php echo $email ?>
                </div>
            </div>
            <div>
                <div class="label">Gender</div>
                <div class="value">
                    <?php echo $gender ?>
                </div>
            </div>
            <div>
                <div class="label">Favorite web browser</div>
                <div class="value">
                    <?php 
                        if(isset($favorite_ide)){
                            foreach($favorite_ide as $value){
                                echo $value. "<br/>";
                            }
                        }
                        
                    ?>
                </div>
            </div>
            <div>
                <div class="label">Prefered Operating System</div>
                <div class="value">
                    <?php echo $system ?>
                </div>
            </div>

            <div class="button_group">
                <button type="button" class="btn btn-success">Save</button>
                <button type="button" class="btn"><a href="exercise4.php">Back</a></button>
            </div>
        </div>
    </div>
</body>

</html>