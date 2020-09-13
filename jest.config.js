/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
