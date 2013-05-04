$(document).ready(function() {
  var turquoise = "#1ABC9C";
  var emerland = "#2ECC71";
  var blue = "#3498DB";
  var purple = "#9B59B6";
  var darkBlue = "#34495E";
  var yellow = "#F1C40F";
  var orange = "#E67E22";
  var red = "#E74C3C";
  var lightGrey = "#ECF0F1";
  var grey = "#95A5A6";

  var turquoiseAlt = "#16A085";
  var emerlandAlt = "#27AE60";
  var blueAlt = "#2980B9";
  var purpleAlt = "#8E44AD";
  var darkBlueAlt = "#2C3E50";
  var yellowAlt = "#F39C12";
  var orangeAlt = "#D35400";
  var redAlt = "#C0392B";
  var lightGreyAlt = "#BDC3C7";
  var greyAlt = "#7F8C8D";

  var data = [
    {
      value: 30,
      color: yellow,
    },
    {
      value: 80,
      color: grey,
    },
    {
      value: 20,
      color: purple,
    },
    {
      value: 190,
      color: emerland,
    },
    {
      value: 10,
      color: red,
    },
  ]

  // show/hide header stuff
  $('.info-btn, .info-content').click(function () {
    $('.site-header').toggleClass('show-info');
  });

  // generate some extra items for styling purposes
  for ( var i = 0; i < 3; i++ ){
    $(".fact-container").clone().appendTo(".facts-list"); 
  }

  // example chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var myNewChart = new Chart(ctx).Pie(data, {
    animateScale: true,
  });

});