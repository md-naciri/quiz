let circle = document.querySelectorAll(".circle");
let stepComponentBar = document.querySelector(".step-component-bar");
let progressBar = document.querySelector(".progress-bar");
let index = 0;
let count = 0;
let corrections = [];
let correction = "";
let answered = "";
const countDown = document.getElementById("countdown");
let time = 15;
circle[index].style.background = "#232f3e";
circle[index].style.color = 'white';

function beforeResult() {
    nextStep();
    $("#questions").hide();
    $(".progress-bar-container").hide();
    $("#result").show();
    document.getElementById("score").innerHTML = count * 100 / questions.length;
    corrections.forEach(element => {
        correction += `<div class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-2 bg-white rounded"><p class="quest-text"><strong>Question:</strong> ${element.question}</p><p class="right-answer"><strong>Right answer:</strong> ${element.answer}</p></div>`;
    });
    document.getElementById("correction").innerHTML = correction;
}

function downTimer() {
    countDown.innerHTML = time;
    if (time < 10){
        countDown.textContent = "0" + time;
    }
    time--;
    if (time >= 0) {
        setTimeout(downTimer, 1000);
    } else {
        corrections.push({ question: questions[k].question, answer: questions[k].answer.correction });
        k++;
        if (k < questions.length) {
            time = 15;
            GetQeustion();
            downTimer();
        }
        else {
            beforeResult();
        }

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
        downTimer();
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
        time = 15;
        answered = option.textContent.slice(0, 1);
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
            beforeResult();
        }
    }
});
$("#right").click(function () {
    circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
    circle[index].style.color = '#f8991c';
    $("#result").hide();
    $("#correction").show();
})























