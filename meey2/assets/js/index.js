// Function Produce
let videoFunc = document.getElementById("videoFunction");
let videoFuncMobile = document.getElementById("videoFunction-mobile");
let myChildrenFunc = document.getElementsByClassName("child-content");
let myArrowFunc = document.getElementsByClassName("arrow");
let myIconFunc = document.getElementsByClassName("icon-function");
let vd1 = document.querySelector(".col-video-1");
let vd2 = document.querySelector(".col-video-2");
var timeArray = [0, 5, 10, 15, 20, 25];
window.onload = function () {
  if (window.matchMedia("(max-width: 992px)").matches) {
    for (let e = 0; e < myChildrenFunc.length; e++) {
      myChildrenFunc[e].style.display = "none";
    }
    vd1.style.display = "none";
    vd2.style.display = "block";
    videoFuncMobile.ontimeupdate = actionChangeTimelineMobile;
  } else {
    vd1.style.display = "block";
    vd2.style.display = "none";
    videoFunc.ontimeupdate = actionChangeTimeline;
  }
};

function actionChangeTimeline() {
  console.log("1");
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
function actionChangeTimelineMobile() {
  let currentTime = videoFuncMobile.currentTime;
  let chooseTime;
  for (let i = 0; i < timeArray.length; i++) {
    if (i !== timeArray.length - 1) {
      chooseTime =
        currentTime >= timeArray[i] && currentTime < timeArray[i + 1];
    } else {
      chooseTime = currentTime >= timeArray[i];
    }
    if (chooseTime === true) {
      for (let e = 0; e < myChildrenFunc.length; e++) {
        myChildrenFunc[e].style.display = "none";
      }
      removeActive();
      let thisDoc = document.querySelector(`div[data-time="${timeArray[i]}s"]`);
      thisDoc.classList.add("active");
      thisDoc.children[0].style.filter = "saturate(8)";
      thisDoc.style.display = "block";
      break;
    }
  }
}

function removeActive() {
  for (let e = 0; e < myChildrenFunc.length; e++) {
    myChildrenFunc[e].classList.remove("active");
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
    myChildrenFunc[i].onclick = function () {
      let time = myChildrenFunc[i].getAttribute("data-time").replace("s", "");
      videoFunc.currentTime = time;
    };
  }
})();

// Dropdown
function tgMenuLang() {
  const tgMenu = document.querySelector(".list-lang-menu");
  tgMenu.classList.toggle("activeTg");
}
function tgMenuLangMb() {
  const tgMenuMb = document.querySelector(".list-lang-menu-mb");
  tgMenuMb.classList.toggle("activeTgMb");
  alert(true);
}

// Scroll
window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("sticky", window.scrollY > 0);
});
const menuMobileToggle = document.querySelector(".menu-mobile");
const menuMobileList = document.querySelector(".menu-mb");

//
