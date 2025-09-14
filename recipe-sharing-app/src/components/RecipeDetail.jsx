import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton"; // <-- add

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);

  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === numericId)
  );

  if (!recipe) {
    return (
      <div style={{ padding: 16 }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/")}>Back to list</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <h2 style={{ marginBottom: 4 }}>{recipe.title}</h2>
        <FavoriteButton recipeId={numericId} /> {/* <-- add */}
      </div>
      <p style={{ marginTop: 0 }}>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p>

      <h3 style={{ marginTop: 24 }}>Edit Recipe</h3>
      <EditRecipeForm recipeId={numericId} />

      <div style={{ marginTop: 24 }}>
        <DeleteRecipeButton recipeId={numericId} />
      </div>
    </div>
  );
};

export default RecipeDetail;
