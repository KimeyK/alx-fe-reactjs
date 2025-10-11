import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setRecipes(data), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Recipe Sharing Platform
          </h1>
          <p className="text-gray-600 mt-1">
            Discover delicious recipes shared by the community.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((r) => (
            <article
              key={r.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-40 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{r.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{r.summary}</p>

                <div className="mt-4">
                  <Link
                    to={`/recipe/${r.id}`}
                    className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default HomePage;
