function showModalState(stateIndex,type) {
  if (type==="web") {
    $("#modal-state-web").modal({
      show: "true",
    });
  
    $(".modal-content").each(function (index) {
      $(this).hide();
    });
  
    $(`#content-state-${stateIndex}`).show();
  } else if (type==="mobile") {
    $("#modal-state-mobile").modal({
      show: "true",
    });
  
    $(".modal-content-mobile").each(function (index) {
      $(this).hide();
    });
  
    $(`#content-state-${stateIndex}-mobile`).show();
  }
  
}

var btnAction = (index,type) => {
  if (type==="mobile") {
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
