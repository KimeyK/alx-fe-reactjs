import axios from "axios";

/**
 * Fetch a single GitHub user by username
 * GET https://api.github.com/users/{username}
 */
export async function fetchUserData(username) {
  if (!username || !username.trim()) throw new Error("Username is required");

  const token = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
  const { data } = await axios.get(url, { headers });
  return data;
}
