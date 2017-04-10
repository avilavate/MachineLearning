import  from './node_modules/cli-chart/chart';

export function charts() {
    var inputs = [1, 3, 5, 5, 7, 8, 9, 25];
  
    var chart = new Chart({
        xlabel: 'orders',
        ylabel: 'months',
        direction: 'y',
        width: 80,
        height: 20,
        lmargin: 15,
        step: 4
    });
    // chart.addBar(3, 'red');
    // chart.addBar(9).addBar(13).addBar(15).addBar(16);

    inputs.forEach(function (element) {
        chart.addBar(element);
    }, this);
    chart.draw();
}