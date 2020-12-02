// Function Produce
let videoFunc = document.getElementById("videoFunction");
let myChildrenFunc = document.getElementsByClassName("child-content");
let myArrowFunc = document.getElementsByClassName("arrow");
let myIconFunc = document.getElementsByClassName("icon-function");
var timeArray = [0, 5, 10, 15, 20, 25];
videoFunc.ontimeupdate = actionChangeTimeline;
function actionChangeTimeline() {
  let currentTime = videoFunc.currentTime;
  let chooseTime;
  for (let i = 0; i < timeArray.length; i++) {
    if (i !== timeArray.length - 1) {
      chooseTime =
        currentTime >= timeArray[i] && currentTime < timeArray[i + 1];
    } else {
      chooseTime = currentTime >= timeArray[i];
    }

    if (chooseTime === true) {
      removeActive();
      let thisDoc = document.querySelector(`div[data-time="${timeArray[i]}s"]`);
      thisDoc.classList.add("active");
      thisDoc.children[3].style.display = "block";
      thisDoc.children[0].style.filter = "saturate(8)";
      break;
    }
  }
}
function removeActive() {
  for (let e = 0; e < myChildrenFunc.length; e++) {
    // if (myChildrenFunc[e].classList.indexOf("active")) {
    myChildrenFunc[e].classList.remove("active");
    // }
  }
  for (let e = 0; e < myArrowFunc.length; e++) {
    myArrowFunc[e].style.display = "none";
  }
  for (let e = 0; e < myIconFunc.length; e++) {
    myIconFunc[e].style.filter = "none";
  }
}
(() => {
  for (let i = 0; i < myChildrenFunc.length; i++) {
    console.log(myChildrenFunc[i]);
    myChildrenFunc[i].onclick = function () {
      let time = myChildrenFunc[i].getAttribute("data-time").replace("s", "");
      console.log(time);
      videoFunc.currentTime = time;
    };
  }
})();

// Dropdown
function showDropdown() {
  let languageDropdown = document.querySelector(".btnDropDw");
  let listLang = document.querySelector("#list-lang");
  listLang.style.display = "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".btnDropDw")) {
    var dropdowns = document.querySelector("#list-lang");
    if (dropdowns.style.display == "block") {
      dropdowns.style.display = "none";
    }
  }
};

// Scroll
window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("sticky", window.scrollY > 0);
});

//
// Scroll to element
function scrollToElement(id) {
  const element = document.querySelector(`#${id}`);
  const topPos = element.getBoundingClientRect().top + window.pageYOffset;

window.scrollTo({
top: topPos-100, 
behavior: 'smooth'
})
}