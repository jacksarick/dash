  percent = Math.floor((sum(agg_data.map(f => f.impressions)) / {{{ ideal-impressions }}}) * 100)

  updateUserCount()
  optimalAd()
  draw_bubble_chart()

  $("#progress").value(percent)
  $("#progress").html(percent + "%")
  $("#percentage").html(percent + "%")
}

$("#country-select").listen("change", updateUserCount);
$("#device-select").listen("change", updateUserCount);
$("#format-select").listen("change", updateUserCount);
$("#axis-one").listen("change", draw_bubble_chart);
$("#axis-two").listen("change", draw_bubble_chart);

function updateUserCount() {
  $("#user-count").html(sum(agg_data[$("#country-select").value()]
            .filter(dp =>
              (dp.platform == $("#device-select").value()) &&
              (dp.format == $("#format-select").value()))
            .map(di => di.impressions)).toLocaleString())
}

listify = (l) => Array.apply(null, $(l).$.options).map(f => f.value)
function optimalAd() {
  countries = listify("#country-select")
  devices = listify("#device-select")
  formats = listify("#format-select")

  max = 0
  optimal = []

  // Highly advanced optimization algorithm
  for (var i = countries.length - 1; i >= 0; i--) {
    for (var k = devices.length - 1; k >= 0; k--) {
      for (var n = formats.length - 1; n >= 0; n--) {
        count = sum(agg_data[countries[i]]
            .filter(dp =>
              (dp.platform == devices[k]) &&
              (dp.format == formats[n]))
            .map(di => di.impressions))
        if (count > max) {
          max = count
          optimal = [countries[i], devices[k], formats[n]];
        }
      }
    }
  }

  $("#country-auto").html(country_names[optimal[0]])
  $("#device-auto").html(optimal[1])
  $("#format-auto").html(optimal[2])
  $("#user-count-auto").html(max.toLocaleString())  