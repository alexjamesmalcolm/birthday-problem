const match = "Match";
const notMatch = "Not match";

const doSomethingNTimes = (numberOfTimes, callback) => {
  for (let index = 0; index < numberOfTimes; index++) {
    callback();
  }
};

const generateBirthDate = () => Math.floor(Math.random() * 365) + 1;

const generatePeople = numberOfPeopleInRoom => {
  const people = [];
  doSomethingNTimes(numberOfPeopleInRoom, () => {
    const birthDate = generateBirthDate();
    people.push(birthDate);
  });
  return people;
};

const countUniqueInstances = array => {
  const count = {};
  array.forEach(value => {
    const key = new String(value);
    if (count[key]) {
      count[key] += 1;
    } else {
      count[key] = 1;
    }
  });
  return count;
};

const doesSomeoneHaveAMatchingBirthday = people =>
  people.some((a, i) => people.some((b, j) => i !== j && a - b === 0));

const testARoom = (numberOfPeople, numberOfTries) => {
  const results = [];
  doSomethingNTimes(numberOfTries, () => {
    const people = generatePeople(numberOfPeople);
    results.push(doesSomeoneHaveAMatchingBirthday(people) ? match : notMatch);
  });
  return results.filter(result => result === match).length / results.length;
};

const generateRange = (a, b) => {
  const range = [];
  for (let n = a; n <= b; n++) {
    range.push(n);
  }
  return range;
};

const calcualteOddsOfNoSameBirthday = n =>
  Math.pow(1 / 365, n) *
  generateRange(365 - n + 1, 365).reduce((a, b) => a * b, 1);

const calculateOddsOfSameBirthday = n => 1 - calcualteOddsOfNoSameBirthday(n);

export {
  testARoom,
  countUniqueInstances,
  generateRange,
  calculateOddsOfSameBirthday
};
