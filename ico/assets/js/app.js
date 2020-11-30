function showModalState(stateIndex, type) {
  if (type === "web") {
    $("#modal-state-web").modal({
      show: "true",
    });

    $(".modal-content").each(function (index) {
      $(this).hide();
    });

    $(`#content-state-${stateIndex}`).show();
  } else if (type === "mobile") {
    $("#modal-state-mobile").modal({
      show: "true",
    });

    $(".modal-content-mobile").each(function (index) {
      $(this).hide();
    });

    $(`#content-state-${stateIndex}-mobile`).show();
  }
}

var btnAction = (index, type) => {
  if (type === "mobile") {
    $(".modal-content-mobile").each(function (index) {
      $(this).hide();
    });
    $(`#content-state-${index}-mobile`).show();
  } else {
    $(".modal-content").each(function (index) {
      $(this).hide();
    });
    $(`#content-state-${index}`).show();
  }
};

// const contentProductList = document.getElementById("content-product");
// function listProduct(e) {
//   console.log(e);

//   switch (e) {
//     case "meey-id": {
//       contentProductList.style.paddingBottom = "174.5px";
//       $(document).ready(function () {
//         $("#content-product")
//           .html(
//             `<div class="row fadeAnimate">
//           <p class="title "><span></span>MEEY ID</p>
//           <div class="col-md-2" id="return-list" onclick="returnMainList()">
//               <span><img src="../assets/images/frame_1.png" alt=""></span>
//           </div>
//           <div class="col-md-2" id="meey-link">
//               <span><img src="../assets/images/frame_2.png" alt=""></span>
//           </div>
//           <div class="col-md-2" id="meey-map">
//               <span> <img src="../assets/images/frame_3.png" alt=""></span>
//           </div>
//           <div class="col-md-2" id="meey-chat">
//               <span><img src="../assets/images/frame_4.png" alt=""></span>
//           </div>
//           <div class="col-md-2" id="meey-crm">
//               <span><img src="../assets/images/frame_5.png" alt=""></span>
//           </div>
//           <div class="col-md-2" id="meey-3d">
//               <span><img src="../assets/images/frame_6.png" alt=""></span>
//           </div>
//         </div>`
//           )
//           .fadeIn("slow");
//       });
//     }
//     case "meey-link": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY LINK</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-map": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY MAPS</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-chat": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY CHAT</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-crm": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY CRM</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-3d": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY 3D</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-project": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY PROJECT</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-pay": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY PAY</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-notary": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY NOTARY</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-ads": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY ADS</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-wallet": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY WALLET</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-socical": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY SOCICAL</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-id": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY ID</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-id": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY ID</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//     case "meey-id": {
//       contentProductList.innerHTML = `<div class="row">
//         <p class="title"><span></span>MEEY ID</p>
//         <div class="col-md-2" id="return-list" onclick="returnMainList()">
//             <span><img src="../assets/images/frame_1.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-link">
//             <span><img src="../assets/images/frame_2.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-map">
//             <span> <img src="../assets/images/frame_3.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-chat">
//             <span><img src="../assets/images/frame_4.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-crm">
//             <span><img src="../assets/images/frame_5.png" alt=""></span>
//         </div>
//         <div class="col-md-2" id="meey-3d">
//             <span><img src="../assets/images/frame_6.png" alt=""></span>
//         </div>
//       </div>`;
//       contentProductList.style.paddingBottom = "174.5px";
//     }
//   }
// }

// function returnMainList() {
//   contentProductList.innerHTML = `<div class="row">
//   <p class="title"><span></span>WHAT IS MEEYLAND ECOSYSTEM</p>
//   <div class="col-md-2" id="meey-id" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_1.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-link" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_2.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-map" onclick="listProduct(this.id)">
//       <span> <img src="../assets/images/frame_3.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-chat" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_4.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-crm" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_5.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-3d" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_6.png" alt=""></span>
//   </div>
// </div>
// <div class="row">
//   <div class="col-md-2" id="meey-project" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_7.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-pay" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_8.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-notary" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_9.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-wallet" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_10.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-ads" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_11.png" alt=""></span>
//   </div>
//   <div class="col-md-2" id="meey-socical" onclick="listProduct(this.id)">
//       <span><img src="../assets/images/frame_12.png" alt=""></span>
//   </div>
// </div>`;
//   contentProductList.style.paddingBottom = "0";
// }
