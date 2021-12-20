module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  restoreMocks: false,
  setupFiles: ['jest-localstorage-mock'],
};
