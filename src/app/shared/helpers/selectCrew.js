/* eslint-disable no-param-reassign */
const dictToArray = (dict) =>
  Object.keys(dict).map((name) => ({ name, jobs: dict[name] }));

const buildSelectedCrew = (selectedCrew, person) => {
  if (selectedCrew[person.name] === undefined) {
    selectedCrew[person.name] = [person.job];
  }
  selectedCrew[person.name] = [...selectedCrew[person.name], person.job];
};

export const selectCrew = (crew) => {
  const selectedCrew = {};
  crew.forEach((person) => {
    switch (person.job) {
      case 'Director':
        buildSelectedCrew(selectedCrew, person);
        break;
      case 'Screenplay':
        buildSelectedCrew(selectedCrew, person);
        break;
      case 'Story':
        buildSelectedCrew(selectedCrew, person);
        break;
      case 'Characters':
        buildSelectedCrew(selectedCrew, person);
        break;
      case 'Executive Producer':
        buildSelectedCrew(selectedCrew, person);
        break;
      default:
        break;
    }
  });
  return dictToArray(selectedCrew);
};
