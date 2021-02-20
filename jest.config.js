module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.tsx', 'src/pages/**/*.tsx'],
  coverageReporters: ['lcov', 'text'],
};
