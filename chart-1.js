document.addEventListener("DOMContentLoaded", function() {
  var options = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Sales (pesos)',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 102, 89, 21]  // Modify this array with your values
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']  // Modify this array with your categories
    }
  };

  var chart = new ApexCharts(document.querySelector("#bsb-chart-1"), options);
  chart.render();
});
