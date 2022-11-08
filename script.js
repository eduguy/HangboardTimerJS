let sets;
let hangTime;
let restTime;
const sound = new Audio();

function startTimer() {
  play("shortBeeperSound");
  initializeFields();
  disableButton();
  setTime();
  countDown();
}

function initializeFields() {
  const hangTimeSelectElem = document.getElementById("hangTimeSelect");
  hangTime = hangTimeSelectElem.options[hangTimeSelectElem.selectedIndex].value;

  const restTimeSelectElem = document.getElementById("restTimeSelect");
  restTime = restTimeSelectElem.options[restTimeSelectElem.selectedIndex].value;

  const setSelectElem = document.getElementById("setSelect");
  sets = setSelectElem.options[setSelectElem.selectedIndex].value;
}

async function countDown() {
  let s = sets;
  updateSetsLeft(s);
  while (s > 0) {
    let curHangTime = hangTime;
    let curRestTime = restTime;

    while (curRestTime > 0) {
      updateTime(curHangTime, curRestTime);
      curRestTime--;
      await sleep(1000);
      if (curRestTime == 3) {
        play("threeSound");
      } else if (curRestTime == 2) {
        play("twoSound");
      } else if (curRestTime == 1) {
        play("oneSound");
      }
    }

    play("hangSound");
    updateTime(curHangTime, curRestTime);

    while (curHangTime > 0) {
      updateTime(curHangTime, curRestTime);
      curHangTime--;
      await sleep(1000);
      if (curHangTime == 3) {
        play("threeSound");
      } else if (curHangTime == 2) {
        play("twoSound");
      } else if (curHangTime == 1) {
        play("oneSound");
      }
    }

    s--;
    updateSetsLeft(s);
    play(s == 0 ? "finishSound" : "restSound");
  }
  enableButton();
  updateTime(0, 0);
}

function updateSetsLeft(param) {
  document.getElementById("setsLeft").innerHTML = "Sets left: " + param;
}

function setTime() {
  document.getElementById("timeLeft").innerHTML =
    "Time left (hang): " + hangTime;
  document.getElementById("timeLeftRest").innerHTML =
    "Time left (rest): " + restTime;
}

function updateTime(time1, time2) {
  document.getElementById("timeLeft").innerHTML = "Time left (hang): " + time1;
  document.getElementById("timeLeftRest").innerHTML =
    "Time left (rest): " + time2;
}

function disableButton() {
  document.getElementById("button").style.opacity = ".25";
  document.getElementById("button").disabled = true;
}

function enableButton() {
  document.getElementById("button").style.opacity = "1";
  document.getElementById("button").disabled = false;
}

function play(type) {
  document.getElementById(type).play();
}

function restartTimer() {
  document.location.reload();
}

//https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
