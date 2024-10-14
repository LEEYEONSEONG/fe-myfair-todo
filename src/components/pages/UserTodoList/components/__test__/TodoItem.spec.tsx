import { RecoilRoot, useSetRecoilState } from "recoil";
import { render, screen, fireEvent } from "@testing-library/react";

import TodoItem from "../TodoItem";

// Recoil의 useSetRecoilState를 모킹
jest.mock("recoil", () => {
  const actualRecoil = jest.requireActual("recoil");
  return {
    ...actualRecoil,
    useSetRecoilState: jest.fn(),
  };
});

describe("TodoItem 컴포넌트", () => {
  const mockTodo = { id: 1, text: "myfair Todo List 만들기", isDone: false };
  const useSetRecoilStateMock = useSetRecoilState as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks(); // 각 테스트 전에 mock 상태 초기화
  });

  test("테스트 케이스 1, 체크 아이콘을 클릭하면 완료 상태가 토글되어야 한다", () => {
    const mockSetTodoList = jest.fn();

    // Given: useSetRecoilState가 mockSetTodoList를 반환하도록 설정
    useSetRecoilStateMock.mockReturnValue(mockSetTodoList);

    render(
      <RecoilRoot>
        <TodoItem todo={mockTodo} />
      </RecoilRoot>,
    );

    // When: 체크 아이콘을 클릭했을 때
    const checkIcon = screen.getByTestId("check-icon");
    fireEvent.click(checkIcon);

    // Then: 완료 상태를 토글하는 함수가 호출되어야 한다
    expect(mockSetTodoList).toHaveBeenCalledTimes(1);
    expect(mockSetTodoList).toHaveBeenCalledWith(expect.any(Function));
  });

  test("테스트 케이스 2, 삭제 아이콘을 클릭하면 할 일이 삭제되어야 한다", () => {
    const mockSetTodoList = jest.fn();

    // Given: useSetRecoilState가 mockSetTodoList를 반환하도록 설정
    useSetRecoilStateMock.mockReturnValue(mockSetTodoList);

    render(
      <RecoilRoot>
        <TodoItem todo={mockTodo} />
      </RecoilRoot>,
    );

    // When: 삭제 아이콘을 클릭했을 때
    const deleteIcon = screen.getByTestId("delete-icon");
    fireEvent.click(deleteIcon);

    // Then: 삭제 함수가 호출되어야 한다
    expect(mockSetTodoList).toHaveBeenCalledTimes(1);
    expect(mockSetTodoList).toHaveBeenCalledWith(expect.any(Function));
  });
});
