import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const linkElement = screen.getByText(/Learn react/i);
    expect(linkElement).toBeInTheDocument();

    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );
  });
});
