import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Component } from "./component";
import { fetchUser, fetchUsers } from "./UsersRepository";

jest.mock("./UsersRepository");

function userFixture(user) {
  return { id: 1, login: "Ania", followers: 2, repositories: 91, ...user };
}

async function itLoadsUsersList(root) {
  fireEvent.click(root.getByText("Load users"));

  await waitFor(() => {
    expect(root.container.querySelectorAll("li")).toHaveLength(2);
    expect(root.getByText(/Ania/).tagName).toEqual("BUTTON");
    expect(root.getByText(/Bartek/).tagName).toEqual("BUTTON");
  });
}

const USER_ANIA = userFixture({ followers: 3210 });
const USER_BARTEK = userFixture({ id: 2, login: "Bartek", followers: 12 });

describe("<Component />", () => {
  beforeEach(() => {
    fetchUsers.mockResolvedValue([USER_ANIA, USER_BARTEK]);
  });

  it("renders users list and a single user", async () => {
    fetchUser.mockResolvedValue(USER_ANIA);

    const root = render(<Component />);

    await itLoadsUsersList(root);

    fireEvent.click(root.getByText(/Ania/));

    await waitFor(() => {
      root.getByText("Followers: 3210");
      root.getByText("Repositories: 91");
    });
  });

  it("allows to back to users list from the single user view", async () => {
    fetchUser.mockResolvedValue(USER_BARTEK);

    const root = render(<Component />);

    await itLoadsUsersList(root);

    fireEvent.click(root.getByText(/Bartek/));

    await waitFor(() => {
      expect(fetchUser).toHaveBeenCalledWith("Bartek");
      root.getByText("Followers: 12");
    });

    fireEvent.click(root.getByText("Back"));

    await waitFor(() => {
      expect(root.container.querySelectorAll("li")).toHaveLength(2);
    });
  });
});
