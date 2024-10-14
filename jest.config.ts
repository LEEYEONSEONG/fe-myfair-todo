import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // ts-jest를 사용하여 TypeScript 파일을 변환
  testEnvironment: "jest-environment-jsdom", // react 컴포넌트 테스트를 위한 jsdom 환경 설정
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
