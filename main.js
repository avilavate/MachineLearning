"use strict";
var inputs_1 = require("./inputs");
var std_daviation_1 = require("./std-daviation");
(function () {
    var stdDavitionObj = new std_daviation_1.StdDaviation(inputs_1.input);
    stdDavitionObj.getStdDaviation();
    inputs_1.input.forEach(function (ele) {
        console.log(ele + " " + stdDavitionObj.isOutlier(ele));
    });
})();
