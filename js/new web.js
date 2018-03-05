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


