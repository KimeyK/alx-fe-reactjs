import RecipeDetail from "./components/RecipeDetail";

...

<Routes>
  <Route
    path="/"
    element={
      <>
        <AddRecipeForm />
        <RecipeList />
      </>
    }
  />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
</Routes>
