import { createContext, useEffect, useState } from "react";
import { getToken } from "../storage/user.storage.js";
import { removeToken } from "../storage/user.storage.js";
import { getLoggedUser } from "../services/user.services.js";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getLoggedUser().then(setUser).catch(removeToken);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
