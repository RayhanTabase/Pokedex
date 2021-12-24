import mockData from '../__mocks__/amiibomock.js';

const displayTotalAmiibo = () => {
  const data = mockData.splice(801, 826);
  let counter = 0;
  for (let i = 0; i < data.length; i += 1) {
    counter += 1;
  }
  return counter;
};

export { displayTotalAmiibo };
