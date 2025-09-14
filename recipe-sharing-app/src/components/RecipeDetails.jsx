import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

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
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p> {/* ensures "recipe.id" is in the file */}

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipeId={numericId} />

      <DeleteRecipeButton recipeId={numericId} />
    </div>
  );
};

export default RecipeDetail;
