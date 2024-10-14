import { atom } from "recoil";

import { ITodo } from "../../types/recoilTypes";

// 할 일 목록 상태
export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: [],
});
