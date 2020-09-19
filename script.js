// setInterval(tickDown,1000) 
// function startTimer( sets, time, rest) {

// }
function startTimer() {
    disableButton();
    setTime();

}

function setTime() {
    var x = document.getElementById("hangTimeSelect");
    var ret = x.options[x.selectedIndex].value;
    var time = document.getElementById("timeLeft");
    time.innerHTML= "Time left (hang):" + ret;

    var t = document.getElementById("restTimeSelect");
    var tt = t.options[t.selectedIndex].value;
    document.getElementById("timeLeftRest").innerHTML = "Time left (rest): " + tt;
}

function disableButton() {
    document.getElementById("button").style.opacity=".25";
    document.getElementById("button").disabled = true;

}

