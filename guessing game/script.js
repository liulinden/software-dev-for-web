const numberbox= document.getElementById("guess");
const feedbackbox= document.getElementById("feedback");
const inbox1 = document.getElementById("input1");
const inbox2 = document.getElementById("input2");
const funcbox = document.getElementById("functionselect");
const outbox1 = document.getElementById("output1");
const outbox2 = document.getElementById("output2");

const randnum = Math.ceil(Math.random()*100);

numberbox.addEventListener("change",checkNumber)
inbox1.addEventListener("change",calc1);
funcbox.addEventListener("change",calc2);
inbox2.addEventListener("change",calc2);

inbox1.value=0;
inbox2.value=0;

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

function calc1(){
    const num = inbox1.value;
    outbox1.innerText= num*num;
}

function calc2(){
    const num = inbox2.value;
    const func = funcbox.value;
    switch (func){
        case 'square':
            outbox2.innerText=num*num;
            break;
        case 'cube':
            outbox2.innerText=num*num*num;
            break;
        case '2x+7':
            outbox2.innerText=num*2+7;
            break;
        case 'double':
            outbox2.innerText=num*2;
            break;
    }
}