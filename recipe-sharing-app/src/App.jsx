import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { useEffect } from "react";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  // optional: seed a couple of examples on first load
  useEffect(() => {
    setRecipes([
      { id: 1, title: "Spaghetti Aglio e Olio", description: "Garlic, olive oil, chili flakes, parsley." },
      { id: 2, title: "Avocado Toast", description: "Sourdough, smashed avocado, lemon, chili." },
    ]);
  }, [setRecipes]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
