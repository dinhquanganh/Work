function showModalState(stateIndex) {
  $("#modal-state").modal({
    show: "true",
  });

  $(".modal-content").each(function (index) {
    $(this).hide();
  });

  $(`#content-state-${stateIndex}`).show();
}

var btnAction = (index) => {
  $(".modal-content").each(function (index) {
    $(this).hide();
  });
  $(`#content-state-${index}`).show();
};
