import { getUserGreetings } from "./greetings";

describe("getUserGreetings", () => {
  it("returns string", () => {
    expect(getUserGreetings("dzień dobry", "Tomek")).toEqual(
      expect.any(String)
    );
  });

  it("return localized user greeting", () => {
    expect(getUserGreetings("dzień dobry", "Tomek")).toEqual(
      "Dzień dobry, Tomek!"
    );
  });
});
