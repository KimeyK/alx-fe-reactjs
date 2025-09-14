import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);

  const favRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favRecipes.length === 0) {
    return <p style={{ padding: "8px" }}>No favorites yet.</p>;
    }
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {favRecipes.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
          <h4 style={{ margin: 0 }}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h4>
          <p style={{ marginTop: 6 }}>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
