const chartContext = document.querySelector("#graph");

import { testARoom } from "./utils.js";
import init, {
  generate_range,
  calculate_odds_of_same_birthday
} from "../wasm/pkg/without_a_bundler.js";

init().then(() => {
  const generateChartData = () => {
    const rangeOfPeople = [...generate_range(2, 70)];
    return {
      labels: rangeOfPeople.map(label => `${label} people`),
      datasets: [
        {
          label: "Exact",
          data: rangeOfPeople.map(
            numberOfPeople =>
              calculate_odds_of_same_birthday(numberOfPeople) * 100
          ),
          backgroundColor: "rgba(178, 206, 254, 0.3)",
          borderColor: "rgba(178, 206, 254, 1)"
        },
        {
          label: "Simulated",
          data: rangeOfPeople.map(
            numberOfPeople => testARoom(numberOfPeople, 75) * 100
          ),
          backgroundColor: "rgba(254, 163, 170, 0.3)",
          borderColor: "rgba(254, 163, 170, 1)"
        }
      ],
      borderWidth: 1
    };
  };

  new Chart(chartContext, {
    type: "line",
    data: generateChartData(),
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Percent"
            }
          }
        ]
      }
    }
  });
});
