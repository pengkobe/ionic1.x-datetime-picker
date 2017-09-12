/**
 * @author Milad Naseri (mmnaseri@programmer.net)
 * @since 1.0 (4/8/16)
 */
/**
 * AngularJS module for demoing the component
 * @type {angular.Module}
 */
(function () {
    var module = angular.module('protonMultiListSelector', ['nxt-date-picker-cmp', 'ngSanitize']);

    module.run(function () {
        self && self.webView && self.webView.scrollView && (self.webView.scrollView.bounces = NO);
        angular.element(document.body).on("touchmove", function (event) {
            event.preventDefault();
        })
    });

    module.controller("MainController", function ($scope) {
        $scope.model = {
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            day:new Date().getDate() ,
            hour: 11,
            minute: 59
        };
    });
})();
