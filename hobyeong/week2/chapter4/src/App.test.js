/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("<App />", () => {
  it("renders component coreactly", () => {
    const { container } = render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload."
    );
    // expect(container).toMatchSnapshot();
  });
});
