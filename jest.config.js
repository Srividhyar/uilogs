/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    displayName: {
        name: 'CCX-logger',
        color: 'greenBright'
    },
    rootDir: './',
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    testPathIgnorePatterns: ['!<rootDir/node_modules'],
    coverageReporters: ['cobertura', 'lcov', 'text'],
    testMatch: ['<rootDir>/src/**/*.test.ts']
};
