import { useState } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>GitHub User Search</h1>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </header>

      <SearchInput
        value={query}
        onChange={setQuery}
        onSubmit={() => {
          console.log("Search for:", query); // hook up API next task
        }}
      />

      <section style={{ marginTop: 24 }}>
        <p>Project bootstrapped. Axios configured. Ready for the GitHub API.</p>
      </section>
    </div>
  );
}

export default App;
