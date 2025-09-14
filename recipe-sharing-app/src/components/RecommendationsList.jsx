import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Recommended for you</h2>
        <button onClick={generateRecommendations}>Refresh</button>
      </div>

      {recommendations.length === 0 ? (
        <p style={{ padding: "8px" }}>No recommendations yet. Favorite a few recipes and refresh!</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {recommendations.map((r) => (
            <div key={r.id} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
              <h4 style={{ margin: 0 }}>
                <Link to={`/recipe/${r.id}`}>{r.title}</Link>
              </h4>
              <p style={{ marginTop: 6 }}>{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
