import ProfilePage from "./ProfilePage";
import DefaultUserContext, { UserContext as NamedUserContext } from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  // Prefer default; fall back to named if needed
  const Ctx = DefaultUserContext || NamedUserContext;

  return (
    <Ctx.Provider value={userData}>
      <ProfilePage />
    </Ctx.Provider>
  );
}

export default App;
