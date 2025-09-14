import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title ?? "");
      setDescription(recipe.description ?? "");
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, {
      title: title.trim(),
      description: description.trim(),
    });
  };

  if (!recipe) return null;

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 600 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: 8 }}
      />
      <textarea
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ padding: 8 }}
      />
      <button type="submit" style={{ width: "fit-content", padding: "8px 12px" }}>
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
