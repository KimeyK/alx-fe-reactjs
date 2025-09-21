import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY || "";

export const github = axios.create({
  baseURL: "https://api.github.com",
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export async function searchUsers(q, perPage = 10, page = 1) {
  if (!q || !q.trim()) return { items: [], total_count: 0 };
  const { data } = await github.get("/search/users", {
    params: { q, per_page: perPage, page },
  });
  return data;
}
