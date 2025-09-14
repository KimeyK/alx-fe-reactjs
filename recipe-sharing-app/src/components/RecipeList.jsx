import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import FavoriteButton from "./FavoriteButton";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);

  const list = searchTerm.trim().length > 0 ? filteredRecipes : recipes;

  if (list.length === 0) {
    return (
      <p style={{ padding: "8px" }}>
        {searchTerm.trim().length > 0
          ? "No recipes match your search."
          : "No recipes yet. Add one above!"}
      </p>
    );
  }

  return (
    <div style={{ display: "grid", gap: "12px", padding: "8px" }}>
      {list.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ddd", padding: "12px", borderRadius: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h3 style={{ margin: 0 }}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <FavoriteButton recipeId={recipe.id} />
          </div>
          <p style={{ marginTop: 8 }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
