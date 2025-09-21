import axios from "axios";

function buildUserQuery({ username = "", location = "", minRepos = "" }) {
  const parts = [];
  if (username?.trim()) parts.push(`${username.trim()} in:login`);
  if (location?.trim()) parts.push(`location:${location.trim()}`);
  if (minRepos?.toString().trim()) parts.push(`repos:>=${minRepos}`);
  return parts.length ? parts.join(" ") : "type:user";
}

function authHeaders() {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function searchUsers(params, page = 1, perPage = 20) {
  const q = buildUserQuery(params);
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=${perPage}`;
  const { data } = await axios.get(url, { headers: authHeaders() });
  return data;
}

export async function fetchUserDetails(login) {
  const url = `https://api.github.com/users/${encodeURIComponent(login)}`;
  const { data } = await axios.get(url, { headers: authHeaders() });
  return data;
}
