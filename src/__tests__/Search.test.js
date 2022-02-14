import { render } from "@testing-library/react";
import Search from "../components/Search";

test("Search.js renders correctly", () => {
  const {asFragment} = render(<Search />);
  expect(asFragment()).toMatchSnapshot();
});
