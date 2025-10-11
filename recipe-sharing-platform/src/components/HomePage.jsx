import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Combine mock data with user-added recipes from localStorage (if any)
    let merged = [...data];
    try {
      const user = JSON.parse(localStorage.getItem("userRecipes") || "[]");
      merged = [...user, ...merged];
    } catch {}
    setRecipes(merged);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Recipe Sharing Platform</h1>
            <p className="text-gray-600">Discover, add, and share your favorite recipes.</p>
          </div>
          <Link
            to="/add"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
          >
            + Add Recipe
          </Link>
        </header>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <Link
              to={`/recipe/${r.id}`}
              key={r.id}
              className="group bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
            >
              <img
                src={r.image}
                alt={r.title}
                className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{r.title}</h2>
                <p className="mt-1 text-gray-600 text-sm">{r.summary}</p>
                <span className="mt-3 inline-block text-blue-600 group-hover:text-blue-700">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
