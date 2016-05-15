/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
 
    $(window).scroll(function() {
        //導覽條放大縮小功能 
        if ( $(this).scrollTop() > 600){
            $('.navbar-inverse .navbar-header > a').css({ 'color': 'black'});
            $('.navbar-inverse .navbar-nav > li > a').css({ 'color': 'black'});
            $('.navbar-inverse').css({ 'background-color': 'rgba(180, 180, 180, 0.7)' });
            $( '.navbar-wrapper' ).removeClass( "large" ).addClass( "small" );
            //顯示捲到頂端
            $('#gotop').fadeIn("slow");
        } 
        else{
            $('.navbar-inverse .navbar-header > a').css({ 'color': 'white'});
            $('.navbar-inverse .navbar-nav > li > a').css({ 'color': 'white'});
            $('.navbar-inverse').css({ 'background-color': 'rgba(0, 0, 0, 0.7)' });
            $( '.navbar-wrapper' ).removeClass( "small" ).addClass( "large" );
            //隱藏捲到頂端
            $('#gotop').stop().fadeOut("slow");
        } 
    });
    
    
    //單一圖片完成讀取後觸發用
    //onload="fadeIn(this)"
    //window.fadeIn = function(obj) {
        //進場動畫顯示     
    //}
    
    //導覽元素hover動畫
    $(".navbar-nav>li>a").hover(function () {
        $(this).addClass('animated rubberBand');
        $(this).css({'color' : '#faf061'});
    }, 
    function () {
        $(this).removeClass('animated rubberBand');
        if ($(this).parents('.large').length > 0){
            $(this).css({'color' : '#ffffff'});
        }
        else{
            $(this).css({'color' : '#000000'});
        }
    });

    
    

});
