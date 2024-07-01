var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:52765/jsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);

    var dates = data.date_population.map(function (elem) {
      return elem.date;
    });
    var populations = data.date_population.map(function (elem) {
      return elem.population;
    });

    const ctx = document.getElementById("canvas").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Population",
            data: populations,
            backgroundColor: "rgba(255, 51, 94, 0.2)",
            borderColor: "#ff335e",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
};
