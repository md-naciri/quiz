
let circle = document.querySelectorAll(".circle");
let stepComponentBar = document.querySelector(".step-component-bar");
let progressBar = document.querySelector(".progress-bar");
let index = 0;
let count = 0;
let corrections = [];
let correction = "";
const countDown = document.getElementById("countdown");
const timerButton = document.getElementById("timer-button");
let time = 30;
circle[index].style.background = "#232f3e";
circle[index].style.color = 'white';

function downTimer() {
    countDown.innerHTML = time;
    time--;
    if (time >= 0) {
        setTimeout(downTimer, 1000); // Repeat the function every 1000 milliseconds (1 second)
    } else {
        timerButton.click(); // Click the button when the timer runs out
    }
}

function nextStep() {
    if (index < 3) {
        circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
        circle[index].style.color = '#f8991c';
        circle[index + 1].style.background = '#232f3e';
        circle[index + 1].style.color = 'white';
        index++;
        stepComponentBar.style.width = `${index * 50}%`;
    }
}
$(document).ready(function () {
    $("#questions").hide();
    $(".progress-bar-container").hide();
    $("#result").hide();
    $("#correction").hide();
    $("#start").click(function () {
        nextStep();
        $("#questions").show();
        $("#info").hide();
        $(".progress-bar-container").show();
    })
})

let choice = document.querySelectorAll('.choice');
let j = 0;
let k = 0;
questions.sort(function () { return Math.random() - 0.5 });
function GetQeustion() {
    document.getElementById("quest").innerHTML = questions[k].question;
    choice.forEach(option => {
        option.innerHTML = questions[k].options[j].letter;
        option.innerHTML += ") " + questions[k].options[j].text;
        j++;
    });
    j = 0;
    progressBar.style.width = `${100 * (k + 1) / questions.length}%`;
}

GetQeustion();

choice.forEach(option => {
    option.onclick = () => {
        let answered = option.textContent.slice(0, 1);
        const { correct } = questions[k].answer;

        if (answered == correct) {
            count++;
        }
        else {
            corrections.push({ question: questions[k].question, answer: questions[k].answer.correction });
        }
        k++;
        if (k < questions.length) {
            GetQeustion();
        }
        else {
            nextStep();
            $("#questions").hide();
            $(".progress-bar-container").hide();
            $("#result").show();
            document.getElementById("score").innerHTML = count * 100 / questions.length;
            corrections.forEach(element => {
                correction += `<div class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-2 bg-white rounded"><p class="quest-text">Question: ${element.question}</p><p class="right-answer">Right answer: ${element.answer}</p></div>`;
            });
            document.getElementById("correction").innerHTML = correction;
            // corrections.forEach(element=>{
            //     document.getElementById("question").innerHTML += element.question;
            //     document.getElementById("correction").innerHTML += element.answer;
            // })

        }
    }
});
$("#right").click(function () {
    circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
    circle[index].style.color = '#f8991c';
    $("#result").hide();
    $("#correction").show();
})























