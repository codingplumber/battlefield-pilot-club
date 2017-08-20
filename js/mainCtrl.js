angular.module('app')
.controller('homeCtrl', function($scope) {

  $scope.slides = [
    {image: './images/home/slider/pic1.jpg', description: 'Image 00'},
    {image: './images/home/slider/pic2.jpg', description: 'Image 01'},
    {image: './images/home/slider/pic3.png', description: 'Image 02'},
    {image: './images/home/slider/pic4.jpg', description: 'Image 03'},
    {image: './images/home/slider/pic5.jpg', description: 'Image 04'}
  ];

  $scope.direction = 'left';
  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function (index) {
    $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function () {
    $scope.direction = 'left';
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function () {
    $scope.direction = 'right';
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };

})

.animation('.slide-animation', function () {

  return {
    beforeAddClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        var finishPoint = element.parent().width();
        if(scope.direction !== 'right') {
          finishPoint = -finishPoint;
        }
        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
      }
      else {
        done();
      }
    },
    removeClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        element.removeClass('ng-hide');

        var startPoint = element.parent().width();
        if(scope.direction === 'right') {
          startPoint = -startPoint;
        }

        TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
      }
    else {
        done();
      }
    }
  };

});
