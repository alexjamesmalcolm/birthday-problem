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

const testARoom = (numberOfPeople, numberOfTries, check) => {
  const results = [];
  doSomethingNTimes(numberOfTries, () => {
    const people = generatePeople(numberOfPeople);
    results.push(check(people) ? match : notMatch);
  });
  return results.filter(result => result === match).length / results.length;
};

export { testARoom };
