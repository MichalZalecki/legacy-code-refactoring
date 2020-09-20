import { amort } from "./amort";

it("renders amortization table", () => {
  expect(amort(10_000, 0.06, 36)).toMatchSnapshot();
});
