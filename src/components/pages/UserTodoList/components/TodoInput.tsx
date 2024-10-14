import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";

import { todoState } from "../../../../recoil/todo/atoms";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTodoList((prev) => [...prev, { id: Date.now(), text: inputValue, isDone: false }]);
      setInputValue("");
    }
  };

  return (
    <StyledInput
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyUp={handleKeyPress}
      placeholder="할 일을 입력해 주세요"
      data-testid="todo-input"
    />
  );
};

export default TodoInput;

const StyledInput = styled.input`
  background-color: #e5e5e5;
  border: none;
  border-radius: 24px;
  padding: 32px;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  margin: 32px 0;

  ::placeholder {
    color: #b9b9b9;
  }
`;
