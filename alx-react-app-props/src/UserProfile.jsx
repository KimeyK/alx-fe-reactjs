import React, { useContext } from "react";
import DefaultUserContext, { UserContext as NamedUserContext } from "./UserContext";

function UserProfile() {
  const Ctx = DefaultUserContext || NamedUserContext;
  const userData = useContext(Ctx);

  return (
    <div>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default UserProfile;
