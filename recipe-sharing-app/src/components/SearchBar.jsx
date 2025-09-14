import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: "100%", padding: 8, margin: "8px 0", boxSizing: "border-box" }}
    />
  );
};

export default SearchBar;
