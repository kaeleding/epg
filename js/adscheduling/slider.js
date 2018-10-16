$(document).ready(function() {
  $("#slider").slider({
    min: 0,
    max: 100,
    step: 1,
    change: showValue
  });
  $("#update").click(function() {
    $("#slider").slider("option", "value", $("#seekTo").val());
  });
  function showValue(event, ui) {
    $("#val").html(ui.value);
  }
});
