const SearchInput = ({ value, onChange, onSubmit, placeholder = "Search GitHub users..." }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      style={{ display: "flex", gap: 8 }}
    >
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
