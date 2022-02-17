import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults technical testing", () => {
    test("renders correctly:snapshot testing", () => {
        const {asFragment} = render(<SearchResults/>);
        expect(asFragment()).toMatchSnapshot();
    });
})