import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/ResMenuMock";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Cart test cases and updating cart component", () => {
  it("should render res menu and update cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    // display accordion Header correctly
    const accordionHeader = screen.getByText("Parathas (5)");
    expect(accordionHeader).toBeInTheDocument();

    // check if menu items are correct in number
    const menuItems = screen.getAllByTestId("menuItems");
    expect(menuItems.length).toBe(5);

    // Check if add btn is working fine
    const addBtns = screen.getAllByText("- Add +");

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    // Updating cart component
    expect(screen.getAllByTestId("menuItems").length).toBe(7);

    const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
    fireEvent.click(clearCartBtn);
    expect(screen.getAllByTestId("menuItems").length).toBe(5);
    expect(
      screen.getByText("Cart is empty. Please add items")
    ).toBeInTheDocument();
  });
});
