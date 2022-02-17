import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search.js technical testing", () =>{

 const validProps = {
  setSearchResults: () => {},
 }
  test("Search.js renders correctly: snapshot testing", () => {
    const { asFragment } = render(<Search setSearchResults={validProps.setSearchResults} />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test("tests if the search input is rendered correctly", () => {
    const {getByTestId} = render(<Search setSearchResults={validProps.setSearchResults} />);
    const searchInput = getByTestId("search-input");
    expect(searchInput).toBeTruthy();
  })

  it("renders search button as expected", () => {
    const { getByTestId } = render(<Search setSearchResults={validProps.setSearchResults} />);
    const button = getByTestId("search-btn");
    expect(button).toBeTruthy();
  });
})