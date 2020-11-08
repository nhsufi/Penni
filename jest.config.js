module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // coverageThreshold: {
  //   global: {
  //     statements: 75,
  //     branches: 75,
  //     functions: 75,
  //     lines: 0,
  //   },
  // },
  testPathIgnorePatterns: ["node_modules", "client", "dist", "coverage"],
  // reporters: [
  //   'default',
  //   [
  //     'jest-junit',
  //     {
  //       outputName: 'junit-TEST.xml',
  //     },
  //   ],
  // ],
  // setupFiles: ["./jest.setup-file.ts"],
};
