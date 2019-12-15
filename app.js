$(".botHeadNavInnerLink")
  .mouseenter(function () {
    $(this).css({
      'border-bottom': '2px solid #f8a12d'
    });
  })
  .mouseleave(function () {
    $(this).css({
      'border-bottom': '2px solid transparent'
    });
  });

$(".l1").hover(function () {
  $(this).next(".subNav1Cont").toggleClass("active");
});

$(".l2").hover(function () {
  $(this).next(".subNav1Cont").toggleClass("active");
});

$(".subNav1Cont")
  .mouseenter(function () {
    $(this).addClass("active");
  })
  .mouseleave(function () {
    $(this).removeClass("active");
  });

$(".snStateCont").hover(function () {
  $(".snStateCont").removeClass("active");
  $(this).addClass("active");
});

$(".frcL1").click(function() {
  $('html,body').animate({
      scrollTop: $(".thirdRowCont").offset().top},
      'slow');
});
$(".frcL2").click(function() {
  $('html,body').animate({
      scrollTop: $(".fourthRowCont").offset().top},
      'slow');
});
$(".frcL3").click(function() {
  $('html,body').animate({
      scrollTop: $(".fifthRowCont").offset().top},
      'slow');
});
$(".frcL4").click(function() {
  $('html,body').animate({
      scrollTop: $(".sixthRowCont").offset().top},
      'slow');
});
$(".frcL5").click(function() {
  $('html,body').animate({
      scrollTop: $(".seventhRowCont").offset().top},
      'slow');
});

$(document).scroll(function () {
  let wHTop = $(window).scrollTop(),
    navH = $(".mainHeaderCont").outerHeight(),
    rowTHTop = $(".thirdRowCont").offset().top,
    rowTHBot = rowTHTop + $(".thirdRowCont").height(),
    rowFRTop = $(".fourthRowCont").offset().top,
    rowFRBot = rowFRTop + $(".fourthRowCont").height(),
    rowFFTop = $(".fifthRowCont").offset().top,
    rowFFBot = rowFFTop + $(".fifthRowCont").height(),
    rowSXTop = $(".sixthRowCont").offset().top,
    rowSXBot = rowSXTop + $(".sixthRowCont").height(),
    rowSVTop = $(".seventhRowCont").offset().top,
    rowSVBot = rowSVTop + $(".seventhRowCont").height(),
    wHnav = wHTop + navH;
  console.log(wHnav, rowSVBot);
  if (wHnav >= 650) {
    $(".firstRowCont").addClass("fixed");
    $(".topHeadCont").addClass("inactive");
    $(".subNav1Cont").css({
      "top": "40px"
    });
  } else {
    $(".firstRowCont").removeClass("fixed");
    $(".topHeadCont").removeClass("inactive");
    $(".subNav1Cont").css({
      "top": "60px"
    });
  }
  wHnav >= rowTHTop && wHnav <= rowTHBot? $(".frcL1").addClass("active"):$(".frcL1").removeClass("active");
  wHnav >= rowFRTop && wHnav <= rowFRBot? $(".frcL2").addClass("active"):$(".frcL2").removeClass("active");
  wHnav >= rowFFTop && wHnav <= rowFFBot? $(".frcL3").addClass("active"):$(".frcL3").removeClass("active");
  wHnav >= rowSXTop && wHnav <= rowSXBot? $(".frcL4").addClass("active"):$(".frcL4").removeClass("active");
  wHnav >= rowSVTop && wHnav <= 4833? $(".frcL5").addClass("active"):$(".frcL5").removeClass("active");
});