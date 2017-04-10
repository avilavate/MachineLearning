"use strict";
var inputs_1 = require("./inputs");
var Chart = require('cli-chart');
var std_daviation_1 = require("./std-daviation");


function charts() {
    var chart = new Chart({
        xlabel: 'orders',
        ylabel: 'months',
        direction: 'y',
        width: 80,
        height: 10,
        lmargin: 15,
        step: 5
    });
    // chart.addBar(3, 'red');
    // chart.addBar(9).addBar(13).addBar(15).addBar(16);

     inputs_1.input.forEach(function (element) {
        chart.addBar(element);
    }, this);
    chart.draw();
}

(function () {
    var stdDavitionObj = new std_daviation_1.StdDaviation(inputs_1.input);
    stdDavitionObj.getStdDaviation();
    charts();
    inputs_1.input.forEach(function (ele) {
        console.log(ele + " " + stdDavitionObj.isOutlier(ele));
    });
})();
