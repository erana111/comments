'use strict';

/**
 * @ngdoc function
 * @name commentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commentsApp
 */
angular.module('commentsApp')
  .controller('MainCtrl', function ($scope) {
      $scope.comments = [
        {
            email: 'elik@bigpanda.io',
            msg: 'Hello there. How are you?'
        },
        {
            email: 'Shai@bigpanda.io',
            msg: 'Good!!!'
        },
        {
            email: 'noam@bigpanda.io',
            msg: 'Goodbye'
        }
      ];

      $scope.setComment = function() {
          if ($scope.commentsFrm.$valid) {
              $scope.comments.push({
                  email: $scope.email,
                  msg: $scope.msg
              });
          } else {
              alert("fields are invalid");
          }
      };
  });
