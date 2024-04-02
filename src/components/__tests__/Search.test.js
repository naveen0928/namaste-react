import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/CardListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Seach test in body component", () => {
  it("should render reslist for burger text", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    // check how many cards are loading on mount
    const cardsOnMount = screen.getAllByTestId("resCard");
    expect(cardsOnMount.length).toBe(20);

    // Find search btn
    const searchBtn = screen.getByRole("button", { name: "Search" });

    // Find search input
    const searchInput = screen.getByTestId("searchInput");

    // fire on change event
    fireEvent.change(searchInput, { target: { value: "burger" } });

    // fire click event
    fireEvent.click(searchBtn);

    // find cards after clicking search
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
  });
});
