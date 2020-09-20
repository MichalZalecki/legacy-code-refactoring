import axios from "axios";

export function fetchUsers() {
  return axios.get("https://api.github.com/users").then((res) => res.data);
}

export function fetchUser(userLogin) {
  return axios
    .get(`https://api.github.com/users/${userLogin}`)
    .then((res) => res.data);
}
