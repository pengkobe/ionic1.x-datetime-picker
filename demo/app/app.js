/**
 * @author Milad Naseri (mmnaseri@programmer.net)
 * @since 1.0 (4/8/16)
 */
/**
 * AngularJS module for demoing the component
 * @type {angular.Module}
 */
(function () {
    var module = angular.module('protonMultiListSelector', ['proton.multi-list-picker', 'ngSanitize']);

    module.run(function () {
        self && self.webView && self.webView.scrollView && (self.webView.scrollView.bounces = NO);
        angular.element(document.body).on("touchmove", function (event) {
            event.preventDefault();
        })
    });

    module.controller("MainController", function ($scope) {
        $scope.pivotYear = new Date().getFullYear();
        // 初始化值
        $scope.model = {
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            day:new Date().getDate() ,
            hour: 11,
            minute: 59
        };
        $scope.attachment = "bottom";
        $scope.bindHtml = "true";

        var years = [];
        $scope.$watch('pivotYear', function (year) {
            year -= 3;
            years ={};
            for (var i = 0; i < 6; i ++) {
                years[year +i]=year +i ;
            }
        });
        // 年
        $scope.getYears = function () {
            return years;
        };
        // 月
        $scope.getMonths = function (year, month) {
            var result = {};
            for (var i = 1; i < 12; i++) {
                result[i]=i+1 ;
            }
            return result;
        };
        // 日
        $scope.getDays = function (year, month) {
            var dataNums = $scope.getDateNum(year, month);
            var result = {};
            for (var i = 1; i < dataNums; i++) {
                result[i]=i ;
            }
            return result;
        };
        $scope.getDateNum = function(year, month) {
            var dateNum = 30;
            if ($scope.specialDateTime.isBigMonth(month)) { //大小月判断
                dateNum++;
            } else {
                if ($scope.specialDateTime.isLoopYear(year)) {
                    if (month == 2)
                        dateNum--;
                } else {
                    if (month == 2)
                        dateNum -= 2;
                }
            }
            return dateNum;
        }

        $scope.specialDateTime = {
            bigMoth: [1, 3, 5, 7, 8, 10, 12],
            isBigMonth: function (month) {
                var length = this.bigMoth.length;
                while (length--) {
                    if (this.bigMoth[length] == month) {
                        return true;
                    }
                }
                return false;
            },
            isLoopYear: function (year) { //是否是闰年
                return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
            }
        };

        // 小时
        $scope.getHour = function () {
            var result = {};
            for (var i = 0; i < 23; i ++) {
                result[i] = i < 10 ? ("0" + i) : i;
            }
            return result;
        };

        // 分钟
        $scope.getMinutes = function () {
            var result = {};
            for (var i = 0; i < 60; i ++) {
                result[i] = i < 10 ? ("0" + i) : i;
            }
            return result;
        };
    });
})();
