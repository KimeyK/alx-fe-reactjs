import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const onDelete = () => {
    if (confirm("Delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button onClick={onDelete} style={{ background: "#c62828", color: "#fff", padding: "8px 12px", border: 0 }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
