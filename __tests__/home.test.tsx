import { render, screen } from "@testing-library/react";
import HomePage from "../app/home/page";

describe("HomePage", () => {
  it("renders a heading", () => {
    render(<HomePage source="codedoozak.ir" />);
    const heading = screen.getByRole("heading", {
      name: /welcome to codedoozak.ir huskey tutorial/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
