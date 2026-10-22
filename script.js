const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ms = document.getElementById("ms");

let hour = 0;
let minute = 0;
let seconds = 0;
let milliseconds = 0;
let timer = false;

function start_timer(event){
    event.preventDefault();
    if(!timer){
        timer = true;
        stopwatch();
    }
}

function reset_timer(event){
    event.preventDefault();
    hr.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
    ms.innerText = "000";
    hour = 0;
    minute = 0;
    seconds = 0;
    milliseconds = 0;
}

function stop_timer(event){
    event.preventDefault();
    timer = false;
}

function stopwatch(){
    if(timer){
        milliseconds += 10;

        if(milliseconds == 1000){
            seconds++;
            milliseconds = 0;
        }

        if(seconds == 60){
            minute++;
            seconds = 0;
        }

        if(minute == 60){
            hour++;
            minute = 0;
        }

        hr.innerText = (hour<10)?("0"+hour):hour;
        min.innerText = (minute<10)?("0"+minute):minute;
        sec.innerText = (seconds<10)?("0"+seconds):seconds;
        ms.innerText = (Math.trunc(milliseconds/10) < 10)?("00"+Math.trunc(milliseconds/10)):((Math.trunc(milliseconds/10) < 100)?("0"+Math.trunc(milliseconds/10)):Math.trunc(milliseconds/10))
        setTimeout(stopwatch, 10);
    }  
}