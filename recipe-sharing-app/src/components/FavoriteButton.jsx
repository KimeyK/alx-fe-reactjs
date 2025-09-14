import { useRecipeStore } from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((s) => s.favorites);
  const toggleFavorite = useRecipeStore((s) => s.toggleFavorite);

  const isFav = favorites.includes(recipeId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(recipeId);
      }}
      style={{
        marginLeft: 8,
        padding: "6px 10px",
        borderRadius: 6,
        border: "1px solid #ccc",
        background: isFav ? "#ffe089" : "#f5f5f5",
      }}
      aria-pressed={isFav}
    >
      {isFav ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
};

export default FavoriteButton;
