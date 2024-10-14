import Image from "next/image";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";

import { todoState } from "../../../../recoil/todo/atoms";

import { ITodo } from "../../../../types/recoilTypes";

interface ITodoItemTypeProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: ITodoItemTypeProps) => {
  const setTodoList = useSetRecoilState(todoState);

  const toggleComplete = () => {
    setTodoList((prev) => prev.map((item) => (item.id === todo.id ? { ...item, isDone: !item.isDone } : item)));
  };

  const deleteTodo = () => {
    setTodoList((prev) => prev.filter((item) => item.id !== todo.id));
  };

  return (
    <TodoItemContainer>
      <Wrapper>
        <CheckButton data-testid="check-icon" onClick={toggleComplete}>
          {todo.isDone && <Image src="/images/ic-check-icon.svg" alt="check icon" width={20} height={20} />}
        </CheckButton>
        <TodoText isDone={todo.isDone}>{todo.text}</TodoText>
      </Wrapper>
      <DeleteIcon
        data-testid="delete-icon"
        src="/images/ic-close-icon.svg"
        alt="delete icon"
        width={24}
        height={24}
        onClick={deleteTodo}
      />
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 16px;
`;

const CheckButton = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TodoText = styled.span<{ isDone: boolean }>`
  margin-left: 10px;
  font-size: 20px;
  line-height: 28px;
  color: ${({ isDone }) => (isDone ? "#868686" : "")};
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const DeleteIcon = styled(Image)`
  cursor: pointer;
`;
