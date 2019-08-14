$(function () {
    'use strict';
    //adjust Slider Hight
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
        
 $('.slider , .carousel-item').height(winH - (upperH + navH));
    
    
});