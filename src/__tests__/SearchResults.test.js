import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

test("renders correctly:snapshot testing", () => {
    const {asFragment} = render(<SearchResults/>);
    expect(asFragment()).toMatchSnapshot();
});