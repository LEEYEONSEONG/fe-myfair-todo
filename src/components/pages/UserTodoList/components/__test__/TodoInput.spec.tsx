import { RecoilRoot } from "recoil";
import { render, screen, fireEvent } from "@testing-library/react";

import TodoInput from "../TodoInput";

describe("TodoInput 컴포넌트", () => {
  test("테스트 케이스 1, 사용자가 텍스트를 입력하고 엔터를 눌렀을 때 할 일이 추가되고 입력 필드가 초기화되는지 확인", () => {
    render(
      <RecoilRoot>
        <TodoInput />
      </RecoilRoot>,
    );

    const inputElement = screen.getByTestId("todo-input");

    // Given: 텍스트를 입력
    fireEvent.change(inputElement, { target: { value: "myfair Todo 플젝 만들기" } });
    expect(inputElement).toHaveValue("myfair Todo 플젝 만들기");

    // When: 엔터 키를 누름
    fireEvent.keyUp(inputElement, { key: "Enter", code: "Enter" });

    // Then: 입력 필드가 초기화되었는지 확인
    expect(inputElement).toHaveValue("");
  });

  test("테스트 케이스 2, 공백 입력 시 할 일이 추가되지 않아야 한다", () => {
    render(
      <RecoilRoot>
        <TodoInput />
      </RecoilRoot>,
    );

    const inputElement = screen.getByTestId("todo-input");

    fireEvent.change(inputElement, { target: { value: "  " } });
    fireEvent.keyUp(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.queryByText("  ")).not.toBeInTheDocument();
  });
});
