module.exports = {
  collectCoverageFrom: ['<rootDir>'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel', //*
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/src/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'

  ],
  transform: {
    '\\.ts$': 'ts-jest'
  }

}
