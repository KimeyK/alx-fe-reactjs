import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errored, setErrored] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrored(false);
    setUser(null);
    if (!username.trim()) return;

    setLoading(true);
    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch {
      setErrored(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <form onSubmit={onSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username (e.g. torvalds)"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: 20 }}>
        {loading && <p>Loading...</p>}
        {!loading && errored && <p>Looks like we cant find the user</p>}
        {!loading && !errored && user && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: "1px solid #e5e5e5",
              padding: 16,
              borderRadius: 10,
            }}
          >
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              width="80"
              height="80"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h2 style={{ margin: 0 }}>{user.name ? user.name : user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
