import { atom, selector } from "recoil";

import { ITodo, ITodoFilter } from "../../types/recoilTypes";

// 할 일 목록 상태
export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: [],
});

// 필터 상태 (All, To Do, Done)
export const todoFilterState = atom<ITodoFilter>({
  key: "todoFilterState",
  default: "All", // 기본값은 전체 보기
});

// 필터링된 할 일 목록
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoFilterState); // 현재 필터 상태를 가져옴
    const todoList = get(todoState); // 전체 할 일 목록을 가져옴

    switch (filter) {
      case "To Do":
        return todoList.filter((todo) => !todo.isDone); // 진행 중인 할 일만
      case "Done":
        return todoList.filter((todo) => todo.isDone); // 완료된 할 일만
      default:
        return todoList; // 전체 보기
    }
  },
});
