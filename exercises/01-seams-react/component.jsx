import React, { useState } from "react";
import axios from "axios";

// 1. Component is doing too much (load button, users list, single user)
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
          <li>Followers: {user.followers}</li>
        </ul>
      </div>
    );
  } else if (users.length === 0) {
    return (
      <button
        onClick={() => {
          axios.get("https://api.github.com/users").then((res) => {
            setUsers(res.data);
          });
        }}
      >
        Load
      </button>
    );
  } else {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => {
                axios
                  .get(`https://api.github.com/users/${user.login}`)
                  .then((res) => {
                    setUser(res.data);
                  });
              }}
            >
              @{user.login}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
