draw_bubble_chart = () => {
  var ctx = document.getElementById("bubble-chart");
  const axis_one = JSON.parse($("#axis-one").value())
  const axis_two = JSON.parse($("#axis-two").value())

  data_set = []

  for (var i = axis_one.length - 1; i >= 0; i--) {
    for (var n = axis_two.length - 1; n >= 0; n--) {
      data_set.push({
        x: i,
        y: n,
        r: impression_count(axis_one[i], axis_two[n])/1000000
      })
    }
  }

  var data = {
    xLabels: axis_one,
    yLabels: axis_two,

    datasets: [{
      label: "Impressions",
      data: data_set,
      backgroundColor: colour.green,
    }]
  };

  var bubbleChart = new Chart(ctx,{
    type: 'bubble',
    data: data,
    options: {
      multiTooltipTemplate:"<%%=datasetLabel%> : <%%= value %>"
    }
  });
}