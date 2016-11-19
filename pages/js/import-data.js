const sum_data = <<< /data/aggregate.json >>>;

const country_names = ["North America", "Europe", "Asia"]
const country_code = ["NA", "EU", "AS"]

// Doctor the data
agg_data = sum_data.map(arr =>
  arr.data
)

contains = (arr, x) => Object.keys(arr).filter(k => arr[k] == x).length > 0

// Format it
country_data = []
country_data = country_data.concat(agg_data[0].map(d => {
  d["country"] = country_code[0]
  return d
}))

country_data = country_data.concat(agg_data[1].map(d => {
  d["country"] = country_code[1]
  return d
}))

country_data = country_data.concat(agg_data[2].map(d => {
  d["country"] = country_code[2]
  return d
}))