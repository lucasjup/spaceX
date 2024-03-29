// Water Usage
var ctx = document.getElementById('shipChartWaterUse').getContext('2d');
var blueOrangeGrad = ctx.createLinearGradient(0, 0, 0, 150);
blueOrangeGrad.addColorStop(0, "rgba(223, 161, 124, 1)");
blueOrangeGrad.addColorStop(1, "rgba(40, 39, 65, 1)");
var chartWaterUse = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec'
    ],
    datasets: [{
      label: 'H20 use in liters',
      backgroundColor: blueOrangeGrad,
      data: [
        250,
        240,
        270,
        290,
        240,
        260,
        250,
        270,
        240
      ]
    }]
  },
  options: {

  },
});

// Hamster Population
var ctx = document.getElementById('shipChartHamster').getContext('2d');
var blueOrangeGrad = ctx.createLinearGradient(0, 0, 0, 150);
blueOrangeGrad.addColorStop(0, "rgba(223, 161, 124, 1)");
blueOrangeGrad.addColorStop(1, "rgba(40, 39, 65, 1)");
var chartHamster = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'okt',
      'nov',
      'dec'
    ],
    datasets: [{
      label: 'Hamsters',
      pointColor: blueOrangeGrad,
      pointSize: 5,
      backgroundColor: blueOrangeGrad,
      data: [
        10,
        48,
        52,
        110,
        150,
        183,
        90,
        130,
        150
      ]
    }]
  },
  options: {
    responsive: true,
  },
});

// Travel Time & Distance
var ctx = document.getElementById('shipChartTravelTime').getContext('2d');
var orangeGrad = ctx.createLinearGradient(0, 0, 0, 400);
orangeGrad.addColorStop(0, "#e99e75");
orangeGrad.addColorStop(1, "#44426e");
var redGrad = ctx.createLinearGradient(0, 0, 0, 400);
redGrad.addColorStop(0, "#ad627f");
redGrad.addColorStop(1, "#e99e75");
var blueGrad = ctx.createLinearGradient(0, 0, 0, 400);
blueGrad.addColorStop(0, "#44426e");
blueGrad.addColorStop(1, "#ad627f");
var chartTravelTime = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'days travelled',
      'days until arrival',
    ],
    datasets: [{
      label: 'days',
      borderColor: '#000000',
      backgroundColor: [
        orangeGrad,
        blueGrad,
      ],
      data: [150, 60]
    }]
  },
  options: {
    responsive: true,
  },
});

// Water available
var ctx = document.getElementById('shipChartWaterStore').getContext('2d');
var orangeGrad = ctx.createLinearGradient(0, 0, 0, 400);
orangeGrad.addColorStop(0, "#e99e75");
orangeGrad.addColorStop(1, "#44426e");
var redGrad = ctx.createLinearGradient(0, 0, 0, 400);
redGrad.addColorStop(0, "#ad627f");
redGrad.addColorStop(1, "#e99e75");
var blueGrad = ctx.createLinearGradient(0, 0, 0, 200);
blueGrad.addColorStop(0, "#44426e");
blueGrad.addColorStop(1, "#ad627f");
var chartWaterStore = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'unused water',
      'recycled water',
      'unusable water',
    ],
    datasets: [{
      label: 'Hamsters',
      borderColor: '#000000',
      backgroundColor: [
        orangeGrad,
        redGrad,
        blueGrad,
      ],
      data: [1100, 400, 100]
    }]
  },
  options: {
    responsive: true,
  },
});