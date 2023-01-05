let circle = document.querySelectorAll(".circle");
let stepComponentBar = document.querySelector(".step-component-bar");
let progressBar = document.querySelector(".progress-bar");
let index = 0;
let count = 0;
let corrections = [];
let correction = "";
let answered = "";
// const countDown = document.getElementById("countdown");
// let time = 30;
circle[index].style.background = "#232f3e";
circle[index].style.color = 'white';



function beforeResult(mydata) {
    nextStep();
    $("#questions").hide();
    $(".progress-bar-container").hide();
    $("#result").show();
    document.getElementById("score").innerHTML = count * 100 / mydata.length;
    corrections.forEach(element => {
        correction += `<div class="container col-lg-6 col-md-8 col-sm-10 shadow p-3 my-2 bg-white rounded"><p class="quest-text"><strong>Question:</strong> ${element[0]}</p><p class="right-answer"><strong>Right answer:</strong> ${element[1]}</p></div>`;
    });
    document.getElementById("correction").innerHTML = correction;
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
    $("#show-correction").hide();
    $("#start").click(function () {
        GetQeustion();
        // downTimer();
        nextStep();
        $("#questions").show();
        $("#info").hide();
        $(".progress-bar-container").show();
    })
})

let choice = document.querySelectorAll('.choice');
let j = 0;
let k = 0;
function GetQeustion() {
    //creating a new instance of the XMLHttpRequest object, which is used to send HTTP requests to a server.
    let mydata = new XMLHttpRequest();

    mydata.onreadystatechange = function () {
        //The value of 4 for the readyState property indicates that the request is complete and the data has been received. 
        //The value of 200 for the status property indicates that the request was successful.
        if (this.readyState === 4 && this.status === 200) {
            mydata = JSON.parse(this.responseText);
            // mydata.sort(function () { return Math.random() - 0.5 });
            document.getElementById("quest").innerHTML = mydata[k]['question'];
            let c = 0;
            choice.forEach(option => {
                c++;
                option.innerHTML = mydata[k][`option${c}`]

                j = 0;
                progressBar.style.width = `${100 * (k + 1) / mydata.length}%`;
                j++;
            });
            // downTimer();
            optionclicked(mydata);
            // console.log(mydata);
        }

    }
    // Opening a GET request to retrieve the contents of the "data.json" file.
    // The true value at the end of the line indicates that the request should be made asynchronously.
    mydata.open('GET', 'data.json', true);
    mydata.send()
}

// function downTimer() {
//     countDown.innerHTML = time;
//     if (time < 10) {
//         countDown.textContent = "0" + time;
//     }
//     time--;
//     if (time >= 0) {
//         setTimeout(downTimer, 1000);
//     } else {
//         corrections.push(mydata[k]['question'],mydata[k]['correction']);
//         k++;
//         if (k < lengthtable) {
//             time = 30;
//             GetQeustion();
//             downTimer();
//         }
//         else {
//             beforeResult();
//         }

//     }
// }
GetQeustion();
function  optionclicked(mydata){
    choice.forEach(option => {
        option.onclick = () => {
            // time=30;
            // downTimer();
            answered = option.textContent;
            // console.log(answered);
            correct  = mydata[k]['correct'];
            // console.log(correct);
    
            if (answered == correct) {
                count++;
            }
            else {
                corrections.push([mydata[k]['question'],mydata[k]['correction']]);
                // console.log(corrections);
            }
            k++;
            console.log(k)
            if (k < mydata.length) {
                GetQeustion();
            }
            else {
                beforeResult(mydata);
            }
        }
    });
}

$("#right").click(function () {
    circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
    circle[index].style.color = '#f8991c';
    $("#result").hide();
    $("#show-correction").show();
})