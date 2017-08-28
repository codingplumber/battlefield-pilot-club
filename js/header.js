angular.module('app')
.directive('header', function() {

  return {
    restrict: 'E',
    templateUrl: './views/header.html',
    link: function(scope, elem, att) {

      $(document).ready(function(){
        $('#nav-icon3').click(function(){
          $(this).toggleClass('open');

          $('#header-slide').toggleClass('down');

          // $('#header-wrapper-slide').toggleClass('down');

          $('#header-first-li').on('mouseenter', function() {
            $('.white').css('background', '#fff');
          });

          $('#header-first-li').on('mouseleave', function() {
            $('.white').css('background', '#013765');
          });

          $('#header-slide li').on('click', function() {
            if ('#header-first-li') {
              $('#header-slide').stop().removeClass('down');
              $('.white').css('background', '#013765');
              $('#nav-icon3').removeClass('open');
            } else {
              $('#nav-icon3').removeClass('open');
              $('#header-slide').stop().removeClass('down');
            }
          });
        });
      });

    }
  }

});
