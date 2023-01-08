export default {
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
 transform: {
    '^.+\\.(t|j)s?$': '@swc/jest',
  },
}