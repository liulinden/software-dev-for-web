const numberbox= document.getElementById("guess");
const feedbackbox= document.getElementById("feedback");

const randnum = Math.ceil(Math.random()*100);

numberbox.addEventListener("change",checkNumber)

function checkNumber(){
    const guess = numberbox.value;
    if (guess < randnum){
        feedbackbox.innerText="too low";
    } else if (guess > randnum){
        feedbackbox.innerText = "too high";
    } else {
        feedbackbox.innerText = "correct!";
    }
}