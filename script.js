// setInterval(tickDown,1000) 
// function startTimer( sets, time, rest) {

// }
var sets;
var hangTime;
var restTIme;
var sound = new Audio();

function startTimer() {
    //sleep?
    sound.play();
    initializeFields();
    disableButton();
    setTime();
    countDown();
    

}

function initializeFields() {
    var x = document.getElementById("hangTimeSelect");
    var ret = x.options[x.selectedIndex].value;
    hangTime = ret;

    var t = document.getElementById("restTimeSelect");
    var tt = t.options[t.selectedIndex].value;
    restTIme = tt;

    var y = document.getElementById("setSelect");
    var yy = y.options[y.selectedIndex].value;
    sets = yy;
}

async function countDown() {
    var s = sets;
    while (s>0) {
        var t = hangTime;
        var tt = restTIme;

        while (t > 0) {
            updateTime(t, tt);
            t--;
            await sleep(1000);
        }


        beep();
        updateTime(t, tt);

        while (tt>0) {
            updateTime(t, tt);
            tt--;
            await sleep(1000);
        }

        beep();

        s--;
    }

    enableButton();
    updateTime(0,0);

}

function setTime() {
    
    document.getElementById("timeLeft").innerHTML= "Time left (hang): " + hangTime;
    document.getElementById("timeLeftRest").innerHTML = "Time left (rest): " + restTIme;
}

function updateTime(time1, time2) {
    document.getElementById("timeLeft").innerHTML= "Time left (hang): " + time1;
    document.getElementById("timeLeftRest").innerHTML = "Time left (rest): " + time2;
}

function disableButton() {
    document.getElementById("button").style.opacity=".25";
    document.getElementById("button").disabled = true;

}

function enableButton() {
    document.getElementById("button").style.opacity="1";
    document.getElementById("button").disabled = false;
}

function beep() {
    sound.src="data/BeeperSound.wav";
    sound.volume=.3;
    sound.play();
}


//https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }