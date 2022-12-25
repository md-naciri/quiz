
let circle = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let index = 0;
let count = 0;
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

let choice = document.querySelectorAll('.op');
let j = 0;
let k = 0;
questions.sort(function(){return Math.random() -0.5});
function GetQeustion() {
    document.getElementById("quest").innerHTML = questions[k].question;
    choice.forEach(option => {
        option.innerHTML = questions[k].options[j].letter;
        option.innerHTML +=") "+questions[k].options[j].text;
        j++;
    });
    j = 0;
}

GetQeustion();

choice.forEach(option => {
    option.onclick = () => {
        let answered=option.textContent.slice(0,1);
        const {correct} = questions[k].answer;
        console.log(answered);
        console.log(correct);
        if (answered==correct){ 
            count++;
        }
        k++;
        if (k < questions.length) {
            GetQeustion();
            
        }
        else{
            nextStep();
            console.log(count);
        }
    }
});























