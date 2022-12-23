
let circle = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let index = 0;
circle[index].style.background = "#232f3e";
circle[index].style.color = 'white';

function nextStep(){
    if (index < 3) {
        circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
        circle[index].style.color = '#f8991c';
        circle[index + 1].style.background = '#232f3e';
        circle[index + 1].style.color = 'white';
        index++;
        progress.style.width = `${index * 50}%`;
    }
}
$(document).ready(function () {
    $("#questions").hide();
    $("#start").click(function () {
        nextStep();
        $("#questions").show();
        $("#info").hide();
    })
})

let op = document.querySelectorAll('.op');
// let questionq = document.getElementById("quest");
let j = 0;



let k = 0;

function GetQeustions() {
    document.getElementById("quest").innerHTML = questions[k].question;
    op.forEach(option => {
        option.innerHTML = questions[k].options[j].text;
        j++;
    });
    j = 0;
}

GetQeustions();

op.forEach(option => {
    option.onclick = () => {
        k++;
        if (k < questions.length) {
            GetQeustions();
        }
    }
});

// let btnNext = document.querySelector(".btn-next");
// let btnNext = document.querySelector(".btn-next");



// btnNext.onclick = () => {
//     if (index < 3) {
//         circle[index].innerHTML = '<i class="fa-solid fa-check"></i>';
//         circle[index].style.color = '#f8991c';
//         circle[index + 1].style.background = '#232f3e';
//         circle[index + 1].style.color = 'white';
//         index++;
//         progress.style.width = `${index * 50}%`;
//     }
// }





















