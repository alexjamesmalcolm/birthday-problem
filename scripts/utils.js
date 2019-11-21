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

const doesSomeoneHaveAMatchingBirthday = people => {
  let result = false;
  people.forEach((a, i) =>
    people.forEach((b, j) => {
      if (i !== j) {
        if (a - b === 0) {
          result = true;
        }
      }
    })
  );
  return result;
};

const testARoom = (numberOfPeople, numberOfTries) => {
  const results = [];
  doSomethingNTimes(numberOfTries, () => {
    const people = generatePeople(numberOfPeople);
    results.push(doesSomeoneHaveAMatchingBirthday(people) ? match : notMatch);
  });
  return results.filter(result => result === match).length / results.length;
};

export { testARoom, countUniqueInstances };
