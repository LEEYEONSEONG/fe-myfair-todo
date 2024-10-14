import { RecoilRoot, useRecoilValue, RecoilValue } from "recoil";
import { render, screen } from "@testing-library/react";

import TodoList from "../TodoList";

import { filteredTodoListState, todoFilterState } from "../../../../../recoil/todo/atoms";

// Recoil의 useRecoilValue를 모킹
jest.mock("recoil", () => {
  const actualRecoil = jest.requireActual("recoil");
  return {
    ...actualRecoil,
    useRecoilValue: jest.fn(),
  };
});

describe("TodoList 컴포넌트", () => {
  const mockTodoList = [{ id: 1, text: "myfair Todo List 만들기", isDone: false }];
  const useRecoilValueMock = useRecoilValue as jest.Mock;

  // 각 테스트 전 mock 상태를 초기화
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("테스트 케이스 1, 할 일이 있을 때 목록이 렌더링 되어야 한다", () => {
    // Given: 할 일이 주어졌을 때
    useRecoilValueMock.mockImplementation((state) => {
      if (state === filteredTodoListState) return mockTodoList;
      if (state === todoFilterState) return "All";
    });

    // When: TodoList 컴포넌트가 렌더링 되었을 때
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>,
    );

    // Then: 할 일이 목록에 나타나야 한다
    expect(screen.getByText("myfair Todo List 만들기")).toBeInTheDocument();
  });

  test("테스트 케이스 2, 할 일이 없을 때 'All' 필터의 빈 메시지가 표시되어야 한다", () => {
    // Given: 할 일이 없고 필터가 "All"일 때
    useRecoilValueMock.mockImplementation((state) => {
      if (state === filteredTodoListState) return [];
      if (state === todoFilterState) return "All";
    });

    // When: TodoList 컴포넌트가 렌더링 되었을 때
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>,
    );

    // Then: '새로운 할 일을 추가해보세요.' 메시지가 나타나야 한다
    expect(screen.getByTestId("empty-message")).toHaveTextContent("새로운 할 일을 추가해보세요.");
  });

  test("테스트 케이스 3, 해야될 일이 없을 때 'To Do' 필터의 빈 메시지가 표시되어야 한다", () => {
    // Given: "To Do"일 때
    useRecoilValueMock.mockImplementation((state) => {
      if (state === filteredTodoListState) return [];
      if (state === todoFilterState) return "To Do";
    });

    // When: TodoList 컴포넌트가 렌더링 되었을 때
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>,
    );

    // Then: '진행해야 할 할 일이 없습니다.' 메시지가 나타나야 한다
    expect(screen.getByTestId("empty-message")).toHaveTextContent("진행해야 할 할 일이 없습니다.");
  });

  test("테스트 케이스 4, 할 일이 없을 때 'Done' 필터의 빈 메시지가 표시되어야 한다", () => {
    // Given: 할 일이 없고 필터가 "Done"일 때
    useRecoilValueMock.mockImplementation((state: RecoilValue<any>) => {
      if (state === filteredTodoListState) return [];
      if (state === todoFilterState) return "Done";
    });

    // When: TodoList 컴포넌트가 렌더링 되었을 때
    render(
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>,
    );

    // Then: '아직 완료된 목록이 없습니다' 메시지가 나타나야 한다
    expect(screen.getByTestId("empty-message")).toHaveTextContent("아직 완료된 목록이 없습니다.");
  });
});
