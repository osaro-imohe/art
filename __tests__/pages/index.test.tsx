import { fireEvent, render, screen } from "@testing-library/react";
import Home from "pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /example app/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders art list", () => {
    render(<Home />);

    const artEntryUl = screen.getByTestId("art-ul");
    const artEntries = screen.getAllByTestId("art-li");

    expect(artEntryUl).toBeInTheDocument();
    expect(artEntries).toHaveLength(4);
  });

  it("returns nothing when no art pieces match supplied query", async () => {
    render(<Home />);

    const searchFilter = screen.getByTestId("art-filter");
    fireEvent.change(searchFilter, {target: {value: "this is a random query string with no matches"}});

    const artEntries = screen.queryByTestId("art-li");

    expect(artEntries).toBeNull();
  });

  it("returns accurate number of art pieces matching query", async () => {
    render(<Home />);

    const searchFilter = screen.getByTestId("art-filter");
    fireEvent.change(searchFilter, {target: {value: "Lowboy"}});
    let artEntries = screen.getAllByTestId("art-li");
    expect(artEntries).toHaveLength(1);

    fireEvent.change(searchFilter, {target: {value: "1953"}});
    artEntries = screen.getAllByTestId("art-li");
    expect(artEntries).toHaveLength(4);

    fireEvent.change(searchFilter, {target: {value: "Isadore"}});
    artEntries = screen.getAllByTestId("art-li");
    expect(artEntries).toHaveLength(1);
  });
});

