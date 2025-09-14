import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
...
<Routes>
  <Route
    path="/"
    element={
      <>
        <AddRecipeForm />
        <SearchBar />
        <RecipeList />

        <hr style={{ margin: "24px 0" }} />
        <h2 style={{ marginTop: 0 }}>My Favorites</h2>
        <FavoritesList />

        <hr style={{ margin: "24px 0" }} />
        <RecommendationsList />
      </>
    }
  />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
</Routes>
