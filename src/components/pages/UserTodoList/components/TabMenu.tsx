import styled from "@emotion/styled";

import { IActive } from "../../../../types/styleTypes";
import { ITodoFilter } from "../../../../types/recoilTypes";

type TabMenuProps = {
  tabList: ITodoFilter[];
  activeTab: ITodoFilter;
  onTabClick: (tab: ITodoFilter) => void;
};

const TabMenu = ({ tabList, activeTab, onTabClick }: TabMenuProps) => {
  return (
    <Container>
      {tabList.map((tab) => (
        <TabButton key={tab} isActive={tab === activeTab} onClick={() => onTabClick(tab)}>
          {tab}
        </TabButton>
      ))}
    </Container>
  );
};

export default TabMenu;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabButton = styled.button<IActive>`
  background-color: ${({ isActive }) => (isActive ? "#EBF4FF" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#2182F3" : "#000")};
  font-size: 16px;
  line-height: 24px;
  padding: 8px 20px;
  min-width: 108px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
