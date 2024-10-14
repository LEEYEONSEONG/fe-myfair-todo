import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import TodoUserListPage from "./TodoUserListPage";

describe("TodoUserListPage 통합 테스트", () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <TodoUserListPage />
      </RecoilRoot>,
    );
  });

  test("테스트 케이스 1, TodoInput에 값을 입력하고 엔터를 눌렀을 때 목록에 추가되어야 한다", () => {
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    fireEvent.change(input, { target: { value: "첫 번째 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("첫 번째 할 일")).toBeInTheDocument();
  });

  test("테스트 케이스 2, To Do 탭에 모든 할 일이 렌더되는지 확인한다", () => {
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    // 2개의 할 일 추가
    fireEvent.change(input, { target: { value: "첫 번째 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "두 번째 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    const toDoTab = screen.getByText("To Do");
    fireEvent.click(toDoTab);

    expect(screen.getByText("첫 번째 할 일")).toBeInTheDocument();
    expect(screen.getByText("두 번째 할 일")).toBeInTheDocument();
  });

  test("테스트 케이스 3, 체크 아이콘을 클릭하면 Done 탭에 해당 할 일이 들어가야 한다", () => {
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    fireEvent.change(input, { target: { value: "완료할 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    // 완료 처리
    const checkIcon = screen.getByTestId("check-icon");
    fireEvent.click(checkIcon);

    // Done 탭으로 이동
    const doneTab = screen.getByText("Done");
    fireEvent.click(doneTab);

    // Done 탭에 완료된 할 일이 표시되는지 확인
    expect(screen.getByText("완료할 할 일")).toBeInTheDocument();

    // Done 탭의 개수 확인
    expect(screen.getByText("총 1개")).toBeInTheDocument();
  });

  test("테스트 케이스 4, 할 일이 추가될 때 To Do와 Done의 개수 카운트가 올바르게 표시되어야 한다", () => {
    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");

    // 2개의 할 일 추가
    fireEvent.change(input, { target: { value: "첫 번째 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "두 번째 할 일" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    // 첫 번째 할 일 완료 처리
    const checkIcon = screen.getAllByTestId("check-icon")[0];

    fireEvent.click(checkIcon);

    // Done 탭으로 이동하여 개수 확인
    const doneTab = screen.getByText("Done");
    fireEvent.click(doneTab);

    expect(screen.getByText("총 1개")).toBeInTheDocument();

    // To Do 탭으로 돌아와 개수 확인
    const toDoTab = screen.getByText("To Do");
    fireEvent.click(toDoTab);

    expect(screen.getByText("총 1개")).toBeInTheDocument();
  });
});
