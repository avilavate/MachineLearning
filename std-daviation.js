"use strict";
var StdDaviation = (function () {
    function StdDaviation(input) {
        this.input = input;
    }
    StdDaviation.prototype.getAverage = function (inp) {
        if (inp.length == 0)
            return 0;
        return inp.reduce(function (a, b) { return a + b; }) / inp.length;
    };
    StdDaviation.prototype.getStdDaviation = function () {
        var _this = this;
        this.average = this.getAverage(this.input);
        // //test todo: remove
        // console.log("Avg: " + average);
        var variences = this.input.map(function (i) { return (_this.average - i) * (_this.average - i); });
        // //test todo: remove
        // console.log("Variences: " + variences);
        var res = Math.sqrt(this.getAverage(variences));
        //test todo: remove
        console.log("Std-Daviation: " + res);
        this.stdDaviation = res;
    };
    StdDaviation.prototype.isOutlier = function (input) {
        return (input - this.average) / this.stdDaviation > 2;
    };
    return StdDaviation;
}());
exports.StdDaviation = StdDaviation;
