'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
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

          $('#header-wrapper-slide').toggleClass('down');

          $('#header-first-li').on('mouseenter', function () {
            $('.white').css('background', '#fff');
          });

          $('#header-first-li').on('mouseleave', function () {
            $('.white').css('background', '#013765');
          });
        });
      });
    }
  };
});
'use strict';

angular.module('app').controller('homeCtrl', function ($scope) {

  // $scope.carousel() {
  //   $scope.myInterval = 3000;
  //   $scope.slides = [
  //     {
  //       image: 'http://lorempixel.com/400/200/'
  //     },
  //     {
  //       image: 'http://lorempixel.com/400/200/food'
  //     },
  //     {
  //       image: 'http://lorempixel.com/400/200/sports'
  //     },
  //     {
  //       image: 'http://lorempixel.com/400/200/people'
  //     }
  //   ];
  // }
  // $scope.carousel();

});
//# sourceMappingURL=bundle.js.map
