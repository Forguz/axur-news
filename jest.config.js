const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'node',
    'png',
  ],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  verbose: true,
};
