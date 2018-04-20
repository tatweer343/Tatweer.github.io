/*global $*/
//featured work shuffel images

$(function () {
  
    $('.featured-work ul li').on('click',function () {
                               
       $(this).addClass('active').siblings().removeClass('active'); 
        if($(this).data('class')==='all'){
            $('.shuffle-imges .col-sm').css('opacity', '1');
        }else{
            $('.shuffle-imges .col-sm').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity','1')
        }
     });
  });


$(function () {
    $('.collapse navbar-collapse .navbar-nav ml-auto .nav-item .nav-link').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

/*

var scrollbutton =$(".scrollup");
$(window).scrollup(function(){
   console.log($(this).scrollup()) ;
    if($(this).scrollup()>=700)
        {
            scrollbutton.show();
        }
     else{
         scrollbutton.hide();
     }
    scrollbutton.click(function(){
        $("html,body").animate({.scrollup:0},600)
    });
});
*/

$(window).scroll(function()
           {$(this).scrollTop()>700?$(".scrollup").fadeIn("slow"):$(".scrollup").fadeOut("slow")}),
           $(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1}),
           $("ul.nav li.dropdown")
           
/*
 $(window).scroll(function(){$(this).scrollTop()>150?$(".scrollup").fadeIn("slow"):$(".scrollup").fadeOut("slow")}),
 $(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1}),$("ul.nav li.dropdown")*/