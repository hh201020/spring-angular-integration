define(['./module'], function(directives) {
	'use strict';
	/**
	 * http://stackoverflow.com/questions/16199418/how-do-i-implement-the-bootstrap-navbar-active-class-with-angular-js
	 */
	directives.directive('navbar', function($location) {
		return {
	      restrict: 'A',
	      link: function postLink(scope, element, attrs, controller) {
		      // Watch for the $location
		      scope.$watch(function() {
		        return $location.path();
		      }, function(newValue, oldValue) {
		        $('li[data-match-route]', element).each(function(k, li) {
		          var $li = angular.element(li),
		            // data('match-rout') does not work with dynamic attributes
		            pattern = $li.attr('data-match-route'),
		            regexp = new RegExp('^' + pattern + '$', ['i']);

		          if(regexp.test(newValue)) {
		            $li.addClass('active');
		          } else {
		            $li.removeClass('active');
		          }

		        });
		      });
		    }
	    };
	});
});