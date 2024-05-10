//add start page that dont appear again once refreshed, when clicked or scroll, will be removed
let introPage = document.getElementById("intro-start");

function noDisplay(){
	introPage.style.display = "none";
}

window.addEventListener("click", noDisplay);

const myTimeout1 = setTimeout(introMessage1, 1200);
const myTimeout2 = setTimeout(introMessage2, 1800);
const myTimeout3 = setTimeout(introMessage3, 2300);
const myTimeout4 = setTimeout(clickStart, 2700);

function introMessage1() {
  document.getElementById("introText1");
  introText1.classList.add('appear');
}
function introMessage2() {
  document.getElementById("introText2");
  introText2.classList.add('appear');
}
function introMessage3() {
  document.getElementById("introText3");
  introText3.classList.add('appear');
}
function clickStart() {
  document.getElementById("startClick");
  startClick.classList.add('appear');
}