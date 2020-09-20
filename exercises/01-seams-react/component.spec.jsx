import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Component } from "./component";
import { fetchUser, fetchUsers } from "./UsersRepository";

jest.mock("./UsersRepository");

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function userFixture(user) {
  return { id: 1, login: "Ania", followers: 2, repositories: 91, ...user };
}

describe("<Component />", () => {
  it("renders users list", (done) => {
    fetchUsers.mockResolvedValue([
      userFixture(),
      userFixture({ id: 2, login: "Bartek" }),
    ]);
    fetchUser.mockResolvedValue(userFixture({ followers: 3210 }));
    const root = render(<Component />);
    fireEvent.click(root.getByText("Load users"));
    waitFor(() => {
      expect(root.container.querySelectorAll("li")).toHaveLength(2);
      expect(root.getByText(/Ania/).tagName).toEqual("BUTTON");
      expect(root.getByText(/Bartek/).tagName).toEqual("BUTTON");
      fireEvent.click(root.getByText(/Ania/));

      return waitFor(() => {
        root.getByText("Followers: 3210");
        root.getByText("Repositories: 91");
      });
    }).then(() => {
      root.debug();
      done();
    });
  });
});
