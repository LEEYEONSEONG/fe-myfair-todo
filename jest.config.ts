import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json", // tsconfig 파일을 여기서 지정
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
