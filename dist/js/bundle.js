'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  });
});
'use strict';

angular.module('app').directive('header', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html'
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

angular.module('app').controller('mainCtrl', function ($scope) {

  // $scope.test = 'ctrl working'

});
//# sourceMappingURL=bundle.js.map
