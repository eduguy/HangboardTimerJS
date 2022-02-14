let sets;
let hangTime;
let restTIme;
let sound = new Audio();

function startTimer() {
    beep();
    initializeFields();
    disableButton();
    setTime();
    countDown();
}

function initializeFields() {
    let x = document.getElementById("hangTimeSelect");
    let ret = x.options[x.selectedIndex].value;
    hangTime = ret;

    let t = document.getElementById("restTimeSelect");
    let tt = t.options[t.selectedIndex].value;
    restTIme = tt;

    let y = document.getElementById("setSelect");
    let yy = y.options[y.selectedIndex].value;
    sets = yy;
}

async function countDown() {
    let s = sets;
    updateSetsLeft(s);
    await sleep(1000);
    while (s > 0) {
        let t = hangTime;
        let tt = restTIme;

        while (t > 0) {
            updateTime(t, tt);
            t--;
            await sleep(1000);
        }


        beep();
        updateTime(t, tt);

        while (tt > 0) {
            updateTime(t, tt);
            tt--;
            await sleep(1000);
        }

        beep();

        s--;
        updateSetsLeft(s);
    }

    enableButton();
    beep();
    updateTime(0, 0);

}

function updateSetsLeft(param) {
    document.getElementById("setsLeft").innerHTML = "Sets left: " + param;
}

function setTime() {

    document.getElementById("timeLeft").innerHTML = "Time left (hang): " + hangTime;
    document.getElementById("timeLeftRest").innerHTML = "Time left (rest): " + restTIme;
}

function updateTime(time1, time2) {
    document.getElementById("timeLeft").innerHTML = "Time left (hang): " + time1;
    document.getElementById("timeLeftRest").innerHTML = "Time left (rest): " + time2;
}

function disableButton() {
    document.getElementById("button").style.opacity = ".25";
    document.getElementById("button").disabled = true;

}

function enableButton() {
    document.getElementById("button").style.opacity = "1";
    document.getElementById("button").disabled = false;
}

function beep() {
    document.getElementById("sound").play();
}


//https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}