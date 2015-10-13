'use strict';

describe('Filter: gravatar', function () {

  // load the filter's module
  beforeEach(module('commentsApp'));

  // initialize a new instance of the filter before each test
  var gravatar;
  beforeEach(inject(function ($filter) {
    gravatar = $filter('gravatar');
  }));

});
