import mockData from '../__mocks__/amiibomock.js';

const displayTotalAmiibo = () => {
  const data = mockData;
  return data.length;
};

export { displayTotalAmiibo };
