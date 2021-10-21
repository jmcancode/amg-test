// on page load
window.addEventListener('load', onTick, false)

const text = document.querySelector('.fancy')
const strText = text.textContent;
const splitText = strText.split("");
// reset text
text.textContent = "";

// loop over 
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 1000);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer=null
}

window.addEventListener('load', onTick1, false)

const text1 = document.querySelector('.fancy1')
const strText1 = text1.textContent;
const splitText1 = strText1.split("");
// reset text
text1.textContent = "";

// loop over 
for(let i=0; i < splitText1.length; i++){
    text1.innerHTML += "<span>" + splitText1[i] + "</span>"
}

let char1 = 0;
let timer1 = setInterval(onTick1, 1000);

function onTick1() {
    const span = text1.querySelectorAll('span')[char1];
    span.classList.add('fade');
    char1++
    if(char1 === splitText1.length){
        complete1();
        return;
    }
}

function complete1() {
    clearInterval(timer1);
    timer1=null
}

window.addEventListener('load', onTick2, false)

const text2 = document.querySelector('.fancy2')
const strText2 = text2.textContent;
const splitText2 = strText2.split("");
// reset text
text2.textContent = "";

// loop over 
for(let i=0; i < splitText2.length; i++){
    text2.innerHTML += "<span>" + splitText2[i] + "</span>"
}

let char2 = 0;
let timer2 = setInterval(onTick2, 1000);

function onTick2() {
    const span = text2.querySelectorAll('span')[char2];
    span.classList.add('fade');
    char2++
    if(char2 === splitText2.length){
        complete2();
        return;
    }
}

function complete2() {
    clearInterval(timer2);
    timer2=null
}
