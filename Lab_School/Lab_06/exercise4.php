<?php
 if(isset($_POST['submit'])){
   session_start();


   $_SESSION['name'] = htmlentities($_POST['name']);
   $_SESSION['email'] = htmlentities($_POST['email']);
   $_SESSION['system'] = htmlentities($_POST['system']);
   $_SESSION['favorite_ide'] = $_POST['favorite_ide'];

   $_SESSION['gender'] = htmlentities($_POST['gender']);

   header('Location: output.php');
 }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <title>PHP Exercises</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="
            col-md-8 col-lg-5
            my-5
            mx-2 mx-sm-auto
            border
            rounded
            px-3
            py-3
          ">
                <h5 class="text-center mb-3">User Information</h5>
                <form id="form" action="
                    <?php echo $_SERVER['PHP_SELF'] ?>
                " method="post">
                    <div class="form-group">
                        <label for="name">Your name</label>
                        <input name="name" type="text" id="name" class="form-control" placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Your email</label>
                        <input name="email" type="text" id="email" class="form-control" placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <legend class="col-form-label">Gender</legend>
                        <div class="custom-control custom-control-inline custom-radio">
                            <input type="radio" class="custom-control-input" id="male" name="gender" value="male" />
                            <label class="custom-control-label" for="male">Male</label>
                        </div>
                        <div class="custom-control custom-control-inline custom-radio">
                            <input type="radio" class="custom-control-input" id="female" name="gender" value="female" />
                            <label class="custom-control-label" for="female">Female</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <legend class="col-form-label">Favorite web browsers</legend>
                        <div class="custom-control custom-checkbox">
                            <input name="favorite_ide[]" type="checkbox" class="custom-control-input" id="chrome"
                                value="Google Chrome" />
                            <label class="custom-control-label" for="chrome">Google Chrome</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input name="favorite_ide[]" type="checkbox" class="custom-control-input" id="ff"
                                value="Firefox" />
                            <label class="custom-control-label" for="ff">Firefox</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input name="favorite_ide[]" type="checkbox" class="custom-control-input" id="safari"
                                value="Safari" />
                            <label class="custom-control-label" for="safari">Safari</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input name="favorite_ide[]" type="checkbox" class="custom-control-input" id="edge"
                                value="Edge" />
                            <label class="custom-control-label" for="edge">Edge</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <legend class="col-form-label">Prefered Operating System</legend>
                        <select id="system" name="system" class="custom-select">
                            <option value="Windows 10" selected>Windows 10</option>
                            <option value="macOS">macOS</option>
                            <option value="Linux">Linux</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary px-5 mr-2" name="submit">
                        Send
                    </button>
                    <button type="reset" class="btn btn-outline-primary px-5">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    </div>
</body>


</html>