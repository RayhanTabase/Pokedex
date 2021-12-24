import { displayTotalAmiibo } from './itemCounter.js';
import mockData from '../__mocks__/amiibomock.js';

describe('Test total item counter', () => {
  test('Check total item counter', () => {
    const apiData = mockData;
    expect(apiData).toHaveLength(826);
    const actualCount = displayTotalAmiibo();
    expect(actualCount).toBe(25);
  });
});