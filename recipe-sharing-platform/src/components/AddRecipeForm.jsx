import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [stepsText, setStepsText] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!title.trim()) {
      nextErrors.title = "Title is required.";
    }

    const ing = ingredientsText
      .split(/\r?\n/)
      .map(s => s.trim())
      .filter(Boolean);
    if (ing.length < 2) {
      nextErrors.ingredients = "Please provide at least two ingredients (one per line).";
    }

    const steps = stepsText
      .split(/\r?\n/)
      .map(s => s.trim())
      .filter(Boolean);
    if (steps.length < 1) {
      nextErrors.steps = "Please provide at least one preparation step.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the recipe object (you can later POST this to an API)
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: stepsText.split(/\r?\n/).map(s => s.trim()).filter(Boolean)[0] || "New recipe",
      image: "https://via.placeholder.com/800x400?text=Recipe",
      ingredients: ingredientsText.split(/\r?\n/).map(s => s.trim()).filter(Boolean),
      steps: stepsText.split(/\r?\n/).map(s => s.trim()).filter(Boolean),
      instructions: stepsText.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
    };

    // For now, just demo: save to localStorage so you can see it later if you want
    try {
      const existing = JSON.parse(localStorage.getItem("userRecipes") || "[]");
      existing.push(newRecipe);
      localStorage.setItem("userRecipes", JSON.stringify(existing));
    } catch {}

    setSubmitted(true);
    // Small delay then return to home
    setTimeout(() => navigate("/"), 700);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        <nav className="mb-4">
          <Link to="/" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Add a New Recipe</h1>
          <p className="text-gray-600 mt-1">Provide a title, ingredients, and preparation steps.</p>

          {submitted && (
            <div className="mt-4 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-green-700">
              Recipe submitted! Redirecting to the home page…
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g. Creamy Mushroom Pasta"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ingredients <span className="text-gray-500 font-normal">(one per line)</span>
              </label>
              <textarea
                rows={6}
                value={ingredientsText}
                onChange={(e) => setIngredientsText(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder={"2 cups flour\n1 tsp salt\n3 eggs"}
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Steps */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preparation Steps <span className="text-gray-500 font-normal">(one per line)</span>
              </label>
              <textarea
                rows={8}
                value={stepsText}
                onChange={(e) => setStepsText(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder={"Mix flour and salt\nBeat in eggs\nKnead dough\nCook and serve"}
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Recipe
              </button>
              <Link
                to="/"
                className="inline-flex justify-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddRecipeForm;
