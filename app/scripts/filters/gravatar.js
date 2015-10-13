'use strict';

/**
 * @ngdoc filter
 * @name commentsApp.filter:gravatar
 * @function
 * @description
 * # gravatar
 * Filter in the commentsApp.
 */
angular.module('commentsApp')
  .filter('gravatar', function (md5) {
    return function (email) {
        return email ? md5.createHash(email.toLowerCase()) : '';
    };
  });
