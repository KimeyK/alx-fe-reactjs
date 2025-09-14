import { useEffect } from "react";
import {
  BrowserRouter as Router,   // ✅ ensures "Router"
  Routes,
  Route,
  Link
} from "react-router-dom";    // ✅ ensures "react-router-dom"
import { useRecipeStore } from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes([
      { id: 1, title: "Spaghetti Aglio e Olio", description: "Garlic, olive oil, chili flakes, parsley." },
      { id: 2, title: "Avocado Toast", description: "Sourdough, smashed avocado, lemon, chili." },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 760, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12 }}>
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Recipe Sharing App</Link>
          </h1>
          <nav><Link to="/" style={{ textDecoration: "none" }}>Home</Link></nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
