"use client";

import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TabMenu from "./components/TabMenu";

import { filteredTodoListState, todoFilterState } from "../../../recoil/todo/atoms";

import { ITodoFilter } from "../../../types/recoilTypes";

const TAB_LIST: ITodoFilter[] = ["All", "To Do", "Done"];

const TodoUserListPage = () => {
  const [filter, setFilter] = useRecoilState(todoFilterState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <Container>
      <Wrapper>
        <Title>To Do List</Title>
        <TodoInput />
        <Contents>
          <TabMenu tabList={TAB_LIST} activeTab={filter} onTabClick={setFilter} />
          <CountText>{`총 ${filteredTodoList.length}개`}</CountText>
          <TodoList />
        </Contents>
      </Wrapper>
    </Container>
  );
};

export default TodoUserListPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 737px;
`;

const Title = styled.span`
  color: #333333;
  font-size: 56px;
  font-weight: 700;
  line-height: 72px;
`;

const Contents = styled.div`
  flex-direction: column;
  box-shadow:
    0px 16px 32px rgba(0, 0, 0, 0.12),
    0px 0px 6px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  width: 100%;
  min-height: 260px;
  padding: 32px;
  border-radius: 24px;
  gap: 32px;
`;

const CountText = styled.p`
  font-size: 20px;
  line-height: 28px;
  padding: 16px;
`;
