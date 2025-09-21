import { useState } from "react";
import { searchUsers, fetchUserDetails } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errored, setErrored] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrored(false);
    setResults([]);
    try {
      const data = await searchUsers({ username, location, minRepos });
      const detailed = await Promise.all(
        data.items.map(async (u) => {
          try {
            const d = await fetchUserDetails(u.login);
            return { ...u, ...d };
          } catch {
            return u;
          }
        })
      );
      setResults(detailed);
    } catch {
      setErrored(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl bg-white border">
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded-md px-3 py-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="border rounded-md px-3 py-2"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <div className="md:col-span-3">
          <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">
            Search
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {errored && <p>Looks like we cant find the user</p>}
        {results.map((u) => (
          <div key={u.id} className="flex items-center gap-4 p-4 border rounded mb-3">
            <img src={u.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold">{u.login}</h2>
              {u.location && <p>📍 {u.location}</p>}
              {u.public_repos !== undefined && <p>Repos: {u.public_repos}</p>}
              <a href={u.html_url} className="text-blue-600" target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
