'use strict'

var responsiveH = $(".responsive").height();
var sideWidth = $(".responsive").width(),
    _sideWidth = 0;
var windowH = $(window).height();
var headTitle = $("#headline");

$(document).ready(function(){
    // MEDIA QUERIES
    // if(_sideWidth != sideWidth){
    //     $(".responsive").css({width:"100%", height:responsiveH});
    // 
    responsive(sideWidth);

    autoExec(headTitle);
});

$(window).resize(function(){

    responsive(sideWidth);

});

function autoExec(str){

    var splitStr = str.split(',');

        for(var i = 0; i < splitStr.length; i++ ){
            console.log(splitStr[i]);
        }
}

function responsive(sideWidth){

    TweenLite.set(headTitle, {fontSize:windowH / 120 + "vh"});

    $('.responsive').each(function(){
        TweenLite.set(this, {height:windowH / 2});
    });
    
    $('.centerMe').each(function(){
        TweenLite.set(this, {
            left: ($(this).parent().width() / 2) - ($(this).width() / 2),
            top: ($(this).parent().height() / 2) - ($(this).height() / 2)
        });
    });

    $('.scaleMe').each(function(){
      var scaleLevel = $(this).attr('data-scale');
      var yOffset = $(this).attr('data-y-offset');
      var transformStyle = $(this).attr('data-transform');
    
      if (transformStyle == "bottom"){
          transformStyle = 'center bottom';
      } else if (transformStyle == "left") {
          transformStyle = 'left top';
      } else if (transformStyle == "right") {
          transformStyle = 'right top';
      }
      else {
          transformStyle = 'center top';
      }
      TweenMax.set(this, {transformOrigin:transformStyle, scale:setScale(sideWidth, scaleLevel, yOffset)});
    });
}

function setScale(sideWidth, scaleLevel, yOffset){
  var scale;

  scaleLevel *= 0.1;

  scale = sideWidth/500;

  if(scale>1) scale = 1;
  if(scale<scaleLevel) scale = scaleLevel;

  return scale;
}


function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
