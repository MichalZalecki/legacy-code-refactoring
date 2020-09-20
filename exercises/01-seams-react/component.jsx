import React, { useState } from "react";
import axios from "axios";
import { fetchUser, fetchUsers } from "./UsersRepository";

// 1. Component is doing too much things (load button, users list, single user)
// 2. Component can't be unit tested (performs API request)
// 3. Component is coupled with GitHub API internals (avatar_url)

export function Component() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div>
        <button onClick={() => setUser(null)}>Back</button>
        <ul>
          <li>
            <img src={user.avatar_url} alt="" />
          </li>
          <li>
            <a href={user.html_url} target="_blank" rel="noreferrer noopener">
              @{user.login}
            </a>
          </li>
          <li>{`Followers: ${user.followers}`}</li>
          <li>{`Repositories: ${user.repositories}`}</li>
        </ul>
      </div>
    );
  } else if (users.length === 0) {
    return (
      <button onClick={() => fetchUsers().then(setUsers)}>Load users</button>
    );
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => fetchUser().then(setUser)}>
              @{user.login}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
