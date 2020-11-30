let myVideo = document.getElementById("myVideo");
let myTime = document.getElementById("myTime").children;
var setTime = () => {
  myVideo.currentTime = 60;
};
var timeArray = [0, 5, 10];
myVideo.ontimeupdate = actionChangeTimeline;
function actionChangeTimeline () {
  let currentTime = myVideo.currentTime;
  let chooseTime;
  for (let i = 0; i < timeArray.length; i++) {
    if (i !== timeArray.length - 1) {
      chooseTime =
        currentTime >= timeArray[i] && currentTime < timeArray[i + 1];
      console.log(chooseTime);
    } else {
      chooseTime = currentTime >= timeArray[i];
      console.log(chooseTime);
    }

    if (chooseTime === true) {
      for (let j = 0; j < myTime.length; j++) {
        myTime[j].style.color = "black";
      }
      document.getElementById(`${timeArray[i]}s`).style.color = "red";
    }
  }
};

// var vid = document.getElementById("featured-video");
// vid.ontimeupdate = currentFeature;

// function currentFeature(e) {
//   var x = vid.currentTime;

//   for (var i = 0; i < timeArray.length; i++) {
//     var time =
//       i !== timeArray.length - 1
//         ? x >= timeArray[i] && x < timeArray[i + 1]
//         : x >= timeArray[i];

//     var el = $(".video-point" + (i + 1));
//     if (!el.hasClass("active") && time) {
//       $(".point").removeClass("active");
//       el.addClass("active");
//     }
//   }
// }

// jQuery(".point").each(function (i, el) {
//   $(this).on("click", function () {
//     jQuery(".point").removeClass("active");
//     var className = "video-point" + i + 1;
//     jQuery("." + className).addClass("active");
//     vid.currentTime = timeArray[i];
//   });
// });
