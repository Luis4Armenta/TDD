/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
}
