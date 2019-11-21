const peopleSlider = document.querySelector("input#people");
const numberOfPeople = document.querySelector("span#numberOfPeople");
const chartContext = document.querySelector("#graph");

import {
  testARoom,
  generateRange,
  calculateOddsOfSameBirthday
} from "./utils.js";
const generateChartData = () => {
  const rangeOfPeople = generateRange(2, 70);
  return {
    labels: rangeOfPeople.map(label => `${label} people`),
    datasets: [
      {
        label: "Exact",
        data: rangeOfPeople.map(
          numberOfPeople => calculateOddsOfSameBirthday(numberOfPeople) * 100
        ),
        backgroundColor: "rgba(178, 206, 254, 0.3)",
        borderColor: "rgba(178, 206, 254, 1)"
      },
      {
        label: "Simulated",
        data: rangeOfPeople.map(
          numberOfPeople => testARoom(numberOfPeople, 100) * 100
        ),
        backgroundColor: "rgba(254, 163, 170, 0.3)",
        borderColor: "rgba(254, 163, 170, 1)"
      }
    ],
    borderWidth: 1
  };
};

const chart = new Chart(chartContext, {
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

const handleNumberOfPeopleChange = number => {
  numberOfPeople.textContent = number;
};

peopleSlider.addEventListener("change", () =>
  handleNumberOfPeopleChange(peopleSlider.value)
);
