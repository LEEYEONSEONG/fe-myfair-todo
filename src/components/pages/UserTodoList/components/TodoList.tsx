import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import TodoItem from "./TodoItem";

import { filteredTodoListState, todoFilterState } from "../../../../recoil/todo/atoms";

import { ITodoFilter } from "../../../../types/recoilTypes";

const EMPTY_MESSAGES: Record<ITodoFilter, string> = {
  All: "새로운 할 일을 추가해보세요.",
  "To Do": "진행해야 할 할 일이 없습니다.",
  Done: "아직 완료된 목록이 없습니다.",
};

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  const filter = useRecoilValue(todoFilterState);

  return (
    <>
      <Container>
        {!!todoList.length ? (
          todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <EmptyMessage data-testid="empty-message">{EMPTY_MESSAGES[filter]}</EmptyMessage>
        )}
      </Container>
    </>
  );
};

export default TodoList;

const Container = styled.ul`
  max-height: 400px;
  overflow-y: scroll;
`;

const EmptyMessage = styled.p`
  color: #868686;
  text-align: center;
  padding: 25px 0;
`;
