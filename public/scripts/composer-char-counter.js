function count() {
  const characters = $("#tweet-text").val().length;
  $(".counter").text(140 - characters);
  if ( $(".counter").text() < 0) {
   $(".counter").addClass("newCounter");
  } 
  else {
    $(".counter").removeClass("newCounter");
  }
}

$(document).ready(function() {
  $(".new-tweet").on('input', count);
});









