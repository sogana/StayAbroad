/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    
    $(window).scroll(function() {
        //導覽條放大縮小功能 
        if ( $(this).scrollTop() > 600){
            //顯示捲到頂端
            $('#gotop').fadeIn("slow");
        } 
        else{
            //隱藏捲到頂端
            $('#gotop').stop().fadeOut("slow");
        } 
    });
    
    $('#gotop').click(function () {
        jQuery("html,body").animate(
		{scrollTop:0},{duration: 2000,
            easing: 'easeInOutCubic'
            // try using 'swing' too
            // 'easeInOutExpo' is supported with jQuery UI
        });
    });
});
