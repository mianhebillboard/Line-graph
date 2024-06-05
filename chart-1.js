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
      name: 'Reservations Overview',
      data: [300, 460, 354, 506, 449, 620, 780, 991, 12455, 1042, 849, 2130]  // Modify this array with your values
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  // Modify this array with your categories
      title: {
        text: 'Months'
      }
    },
    yaxis: {
      title: {
        text: 'Reservations'
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#bsb-chart-1"), options);
  chart.render();
});
