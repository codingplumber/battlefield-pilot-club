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
    link: function link(scope, elem, attrs) {}
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
