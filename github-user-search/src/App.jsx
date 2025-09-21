import Search from "./components/Search";

function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>GitHub User Search</h1>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </header>
      <Search />
    </div>
  );
}

export default App;
