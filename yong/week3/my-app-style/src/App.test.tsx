import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();


    // querySelector 등의 메서드로 DOM 노드의 직접 접근해서 조작하는건 권장되지 않음.
    // 코드 가독성도 떨어질뿐만 아니라 에러가 빈번하게 발생함
    // expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    const appLogo = screen.getByAltText("logo");
    expect(appLogo).toBeInTheDocument();

    // expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
    //   "src",
    //   "logo.svg"
    // );
    expect(appLogo).toHaveAttribute("src", "logo.svg");

    // expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(screen.getAllByText(/save to reload/i)).toHaveLength(1);

    // expect(container.getElementsByTagName("p")[0]).toHaveTextContent("test");
    expect(screen.getByText(/save to reload/i)).toHaveTextContent("Edit src/App.tsx and save to reload.");

    /* 공식문서에서 getByRole을 권장한다고 해서 
    테스트를 위해 role을 억지로 선언할 필요는 없습니다. 
    기본적으로 몇몇 HTML 시맨틱 태그는 이미 implicit role을 가지고 있기 때문에 
    해당 role과 두번째 인자로 들어가는 옵션 객체를 통해 찾고자 하는 타입을 좁힐 수 있습니다.*/

    expect(container).toMatchSnapshot();
  });
});
