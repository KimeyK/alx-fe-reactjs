import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  // Seed a couple of recipes once
  useEffect(() => {
    setRecipes([
      { id: 1, title: "Spaghetti Aglio e Olio", description: "Garlic, olive oil, chili flakes, parsley." },
      { id: 2, title: "Avocado Toast", description: "Sourdough, smashed avocado, lemon, chili." },
    ]);
  }, [setRecipes]);

  return (
    <BrowserRouter>
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
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
