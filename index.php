<?php
require('dataManagement.php');
$table = new Database();
//The getData method of the $table object sends an SQL query to the database and returns the result set as an array
$elements = $table->getData('SELECT * FROM les_ques INNER JOIN les_rep ON les_ques.id = les_rep.id ORDER BY RAND()');
foreach ($elements as $element) {
    $newTable[] = $element;
}
//Encoding the $newTable array as a JSON string. 
//The JSON_UNESCAPED_UNICODE is used to prevent special Unicode characters from being escaped in the JSON string.
$json = json_encode($newTable, JSON_UNESCAPED_UNICODE);
//Writing the JSON string to a file called "data.json".
file_put_contents('data.json', $json);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="assets/img/white-1.png" type="image/x-icon">
    <title>AWS Quiz</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <header class="navbar">
        <div class="logo"><img src="assets/img/white-1.png" alt=""></div>
    </header>
    <main>
        <div class="step-component mt-5">
            <div class="step-component-container">
                <div class="step-component-bar"></div>
            </div>
            <div class="circles">
                <span class="circle"><i class="fa-solid fa-info"></i></span>
                <span class="circle"><i class="fa-solid fa-question"></i></span>
                <span class="circle"><i class="fa-solid fa-sheet-plastic"></i></span>
            </div>
        </div>
        <div id="info" class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-5 bg-white rounded">
            <h4>AWS Certified Cloud Practitioner (CLF-C01)<br />
                Sample Exam Questions
            </h4>
            <br />
            <div>
                <h6>1. Only 30 seconds will be given for each question.</h6>
                <h6>2. Once the timer runs out, you are unable to select any option.</h6>
                <h6>3. Your score will be determined by how accurately you respond.</h6>
            </div>
            <button type="button" id="start" class="btn mt-4">Start Quiz</button>
        </div>
        <div id="questions" class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-5 bg-white rounded">
            <h5 id="quest"></h5>
            <button type="button" class="choice btn col-11"></button>
            <button type="button" class="choice btn col-11"></button>
            <button type="button" class="choice btn col-11"></button>
            <button type="button" class="choice btn col-11"></button>
            <!-- <div class="text-center fw-bold">0:<span id="countdown"></span></div> -->
        </div>
        <div id="result" class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-5 bg-white rounded">
            <h6 class="fw-bold">You answered properly <span id="score"></span>% of the questions</h6>
            <button type="button" id="right" class="btn fs-6">Display the questions you answered wrong</button>
        </div>

        <div class="progress-bar-container">
            <div class="progress-bar"></div>
        </div>
        <div id="show-correction">
            <button class="btn" onclick="location.reload();">Retake the quiz</button>
            <div id="correction" class="mt-5"></div>
        </div>


    </main>

    <!-- <script src="assets/js/data.js"></script> -->
    <script src="assets/js/script.js"></script>


</body>

</html>