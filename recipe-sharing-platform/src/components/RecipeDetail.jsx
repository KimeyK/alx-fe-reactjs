import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetch by reading from imported data, then set state
    const recipeId = Number(id);
    const found = data.find((r) => r.id === recipeId) || null;
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Recipe not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  // Prefer "instructions" if present; fall back to "steps" for safety.
  const instructions = recipe.instructions?.length ? recipe.instructions : recipe.steps || [];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <nav className="mb-4">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </nav>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
            <p className="mt-2 text-gray-700">{recipe.summary}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-gray-50 rounded-lg p-4 border">
                <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
                <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                  {recipe.ingredients?.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-gray-50 rounded-lg p-4 border">
                <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
                <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
                  {instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default RecipeDetail;
