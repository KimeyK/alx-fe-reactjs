import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p style={{ padding: "8px" }}>No recipes yet. Add one above!</p>;
  }

  return (
    <div style={{ display: "grid", gap: "12px", padding: "8px" }}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ddd", padding: "12px", borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ marginTop: 8 }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
