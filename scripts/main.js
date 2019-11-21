const peopleSlider = document.querySelector("input#people");
const numberOfPeople = document.querySelector("span#numberOfPeople");
const chartContext = document.querySelector("#graph");

import { testARoom, generateRange } from "./utils.js";
const generateChartData = () => {
  const rangeOfPeople = generateRange(2, 70);
  return {
    labels: rangeOfPeople.map(label => new String(label)),
    datasets: [
      {
        label: "% of matching birthdays",
        data: rangeOfPeople.map(
          numberOfPeople => testARoom(numberOfPeople, 100000) * 100
        ),
        backgroundColor: ["rgba(178, 206, 254, 0.3)"],
        borderColor: ["rgba(178, 206, 254, 1)"],
        borderWidth: 1
      }
    ]
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
