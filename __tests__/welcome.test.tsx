import { render, screen } from "@testing-library/react";
import Welcom from "../app/components/welcom";

describe("Welcom", () => {
  it("renders a heading", () => {
    render(<Welcom source="codedoozak.ir" />);
    const heading = screen.getByRole("heading", {
      name: /welcome to codedoozak.ir huskey tutorial/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
