$(_ => {
  let key = null;

  $("form").on("submit", function (e) {
    e.preventDefault();
    key = $("input[type='text']").val();
  });

  $(document).off("keypress").on("keypress", function (e) {
    if (e.key !== key) return;
    $("a").trigger("click");
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    $("#accordion").slideToggle();
  });
});