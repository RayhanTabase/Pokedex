import { displayTotalAmiibo } from './itemCounter.js';
import mockData from '../__mocks__/amiibomock.js';

describe('Test total item counter', () => {
  test('Check total item counter', () => {
    const actualCount = displayTotalAmiibo();
    const expectedCount = mockData.length;
    expect(actualCount).toBe(expectedCount);
  });
});