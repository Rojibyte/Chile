$(".botHeadNavInnerLink")
  .mouseenter(function() {
    $(this).css({'border-bottom':'2px solid #f8a12d'});
    $(this).next(".subNav1Cont").css({"opacity":"1"});
  })
  .mouseleave(function() {
    $(this).css({'border-bottom':'2px solid transparent'});    
    $(this).next(".subNav1Cont").css({"opacity":"0"});
});

$(".subNav1Cont")
  .mouseenter(function() {
    $(this).css({"opacity":"1"});
  })
  .mouseleave(function() {  
    $(this).css({"opacity":"0"});
});

$(".snStateCont")
  .mouseenter(function() {
    $(this).addClass("active");
  })
  .mouseleave(function() {  
    $(this).removeClass("active");
});

$(document).scroll(function(){
    let wH = $(window).scrollTop();    
        navH = $(".mainHeaderCont").outerHeight(),
        wHnav = wH + navH;
    if (wHnav >= 650){
        $(".firstRowCont").addClass("fixed");
        $(".topHeadCont").addClass("inactive");
        $(".subNav1Cont").css({"top":"40px"});
    }else{
        $(".firstRowCont").removeClass("fixed");
        $(".topHeadCont").removeClass("inactive");
        $(".subNav1Cont").css({"top":"60px"});
    }
});
