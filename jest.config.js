module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/tests/unit/**/*.test.ts"],
  collectCoverageFrom: [
    "src/components/uv-modal.ts",
    "src/components/uv-dropdown.ts",
    "src/components/uv-tooltip.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
