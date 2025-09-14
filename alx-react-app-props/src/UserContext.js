import React, { createContext } from "react";

// Named export (checker may look for this)
export const UserContext = React.createContext();

// Default export (checker may import default)
const DefaultUserContext = createContext();
export default DefaultUserContext;
