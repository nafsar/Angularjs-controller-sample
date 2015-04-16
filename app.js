(function(angular) {
  'use strict';
var myApp = angular.module('sportApp', []);
var workout ="very cool";
myApp.controller('SportController', function() {
    this.idea = workout;

    this.greatSport = function() {
        this.idea = 'great';
    };

   this.goodIdea = function() {
        return 'Exercise';
    };

    this.funSport = function() {
        this.idea = 'fantastic';
    };
});
})(window.angular);