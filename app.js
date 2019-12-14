$(".botHeadNavLink span a")
  .mouseenter(function() {
    $(this).css({'border-bottom':'2px solid #f8a12d'});
  })
  .mouseleave(function() {
    $(this).css({'border-bottom':'2px solid transparent'});
});

$(document).scroll(function(){
    let wH = $(window).scrollTop();    
        navH = $(".mainHeaderCont").outerHeight(),
        wHnav = wH + navH;
    if (wHnav > 650){
        $(".firstRowCont").addClass("fixed");
        $(".topHeadCont").addClass("inactive");
    }else{
        $(".firstRowCont").removeClass("fixed");
        $(".topHeadCont").removeClass("inactive");
    }
});
