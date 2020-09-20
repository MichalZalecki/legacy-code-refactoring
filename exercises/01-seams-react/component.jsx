import React, { useState } from "react";
import * as UsersRepository from "./UsersRepository";

// 1. ✅ Component is doing too much (load button, users list, single user)
// 2. ✅ Component can't be unit tested (performs API request)
// 3. ✅ Component is coupled with GitHub API internals (avatar_url)

function LoadButton({ onClick }) {
  return <button onClick={onClick}>Load users</button>;
}

function SingleUserView({ onBack, user }) {
  return (
    <div>
      <button onClick={onBack}>Back</button>
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
}

function UsersList({ users, onSelection }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <button onClick={() => onSelection(user.login)}>@{user.login}</button>
        </li>
      ))}
    </ul>
  );
}

export function Component() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  function resetUser() {
    setUser(null);
  }

  function selectUser(login) {
    UsersRepository.fetchUser(login).then(setUser);
  }

  function loadUsers() {
    UsersRepository.fetchUsers().then(setUsers);
  }

  if (user) {
    return <SingleUserView onBack={resetUser} user={user} />;
  }

  if (users.length === 0) {
    return <LoadButton onClick={loadUsers} />;
  }

  return <UsersList onSelection={selectUser} users={users} />;
}
