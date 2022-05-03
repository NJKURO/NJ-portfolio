$(document).ready(function() {
  $("#p1").click(function() {
    $("html, body").animate({
      scrollTop: $("#firstPage").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#p2").click(function() {
    $("html, body").animate({
      scrollTop: $("#secondPage").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#p3").click(function() {
    $("html, body").animate({
      scrollTop: $("#div3").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });

  document.addEventListener('click', function handleClick(event) {
  event.target.classList.add('active');
  });
});
