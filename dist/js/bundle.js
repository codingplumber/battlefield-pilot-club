'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  }).state('projects', {
    url: '/projects',
    templateUrl: './views/projects.html'
  }).state('memberships', {
    url: '/memberships',
    templateUrl: './views/memberships.html'
  }).state('ethics', {
    url: '/ethics',
    templateUrl: './views/ethics.html'
  }).state('board', {
    url: '/board',
    templateUrl: './views/board.html'
  });
});
'use strict';

angular.module('app').directive('carousel', function () {
  return {
    restrict: "E",
    templateUrl: "./views/carousel.html",
    link: function link(scope, elem, attrs) {
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
  };
});
'use strict';

angular.module('app').directive('footer', function () {

  return {
    restrict: 'E',
    templateUrl: './views/footer.html'
  };
});
'use strict';

angular.module('app').directive('header', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html',
    link: function link(scope, elem, att) {

      $(document).ready(function () {
        $('#nav-icon3').click(function () {
          $(this).toggleClass('open');

          $('#header-slide').toggleClass('down');

          // $('#header-wrapper-slide').toggleClass('down');

          $('#header-first-li').on('mouseenter', function () {
            $('.white').css('background', '#fff');
          });

          $('#header-first-li').on('mouseleave', function () {
            $('.white').css('background', '#013765');
          });

          $('#header-slide li').on('click', function () {
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
  };
});
'use strict';

angular.module('app').controller('homeCtrl', function () {

  //   $scope.slides = [
  //     {image: './images/home/slider/pic2.jpg', description: 'Image 00'},
  //     {image: './images/home/slider/pic3.jpg', description: 'Image 01'},
  //     {image: './images/home/slider/pic4.jpg', description: 'Image 02'},
  //     {image: './images/home/slider/pic7.jpg', description: 'Image 03'},
  //     {image: './images/home/slider/pic6.jpg', description: 'Image 03'}
  //   ];
  //
  //   $scope.direction = 'left';
  //   $scope.currentIndex = 0;
  //
  //   $scope.setCurrentSlideIndex = function (index) {
  //     $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
  //     $scope.currentIndex = index;
  //   };
  //
  //   $scope.isCurrentSlideIndex = function (index) {
  //     return $scope.currentIndex === index;
  //   };
  //
  //   $scope.prevSlide = function () {
  //     $scope.direction = 'left';
  //     $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  //   };
  //
  //   $scope.nextSlide = function () {
  //     $scope.direction = 'right';
  //     $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  //   };
  //
  // })
  // .animation('.slide-animation', function () {
  //
  //   return {
  //     beforeAddClass: function (element, className, done) {
  //       var scope = element.scope();
  //
  //       if (className == 'ng-hide') {
  //         var finishPoint = element.parent().width();
  //         if(scope.direction !== 'right') {
  //           finishPoint = -finishPoint;
  //         }
  //         TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
  //       }
  //       else {
  //         done();
  //       }
  //     },
  //     removeClass: function (element, className, done) {
  //       var scope = element.scope();
  //
  //       if (className == 'ng-hide') {
  //         element.removeClass('ng-hide');
  //
  //         var startPoint = element.parent().width();
  //         if(scope.direction === 'right') {
  //           startPoint = -startPoint;
  //         }
  //
  //         TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
  //       }
  //       else {
  //         done();
  //       }
  //     }
  //   };

});
'use strict';

angular.module('app').directive('navScroll', function () {

  return {
    restrict: 'A',
    link: function link(scope, elem, att) {
      $(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() >= 154) {
            elem.addClass('scroll-fix');
            elem.children().css({ "color": "#fff" });
          } else if ($(window).scrollTop() < 155) {
            elem.removeClass('scroll-fix');
            elem.children().css({ "color": "#013765" });
          }
        });
      });
    }
  };
});
//# sourceMappingURL=bundle.js.map
