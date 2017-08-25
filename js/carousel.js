angular.module('app')
.directive('carousel', function() {
  return {
    restrict: "E",
    templateUrl: "./views/carousel.html",
    link: function(scope, elem, attrs) {
      // $(document).ready(function(){
      //   console.log('.carousel');
      //   $('.carousel').slick({
      //     dots: true,
      //     infinite: true,
      //     speed: 500,
      //     fade: true,
      //     cssEase: 'linear'
      //   });
      // });
    }
  }
})
