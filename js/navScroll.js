angular.module('app')
.directive('navScroll', function() {

  return {
    restrict: 'A',
    link: function(scope, elem, att) {
      $(document).ready(function(){
        $(window).scroll(function() {
          if ($(window).scrollTop() >= 154) {
            elem.addClass('scroll-fix');
            elem.children().css({"color": "#fff"});
          } else if ($(window).scrollTop() < 155) {
            elem.removeClass('scroll-fix');
            elem.children().css({"color": "#013765"});
          }
        });
      });
    }
  }

});
