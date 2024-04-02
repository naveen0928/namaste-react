import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withTotalRatingsString,
  RestaurantCardPromoted,
} from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Component test cases", () => {
  it("should render res card with props data", () => {
    render(<RestaurantCard resCard={MOCK_DATA.resCard} />);
    const name = screen.getByText("The Brooklyn Creamery - Healthy Ice Cream");
    expect(name).toBeInTheDocument();
  });

  it("should render res card component with promoted label", () => {
    // render(
    //   withTotalRatingsString(<RestaurantCard resCard={MOCK_DATA.resCard} />)
    // );
    // const label = screen.findByLabelText("Promoted");
    // expect(label).toBe();
  });
});
