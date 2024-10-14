import { render, screen, fireEvent } from "@testing-library/react";

import TabMenu from "../TabMenu";

import { ITodoFilter } from "../../../../../types/recoilTypes";

const TAB_LIST: ITodoFilter[] = ["All", "To Do", "Done"];

describe("TabMenu 컴포넌트", () => {
  test("테스트 케이스 1, 탭 메뉴가 제대로 렌더링되는지 확인", () => {
    render(<TabMenu tabList={TAB_LIST} activeTab="All" onTabClick={() => {}} />);

    // 탭 이름 확인
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  test("테스트 케이스 2, 탭 클릭 시 onTabClick 이벤트가 호출되는지 확인", () => {
    const onTabClickMock = jest.fn();
    render(<TabMenu tabList={TAB_LIST} activeTab="All" onTabClick={onTabClickMock} />);

    // 탭 클릭
    fireEvent.click(screen.getByText("To Do"));
    expect(onTabClickMock).toHaveBeenCalledWith("To Do");
  });
});
