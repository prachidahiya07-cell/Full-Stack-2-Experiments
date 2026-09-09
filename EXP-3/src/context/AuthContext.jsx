import { useState } from "react";
import users from "../data/users";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("campusUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("campusToken");
  });

  const login = (username, password) => {
    const foundUser = users.find(
      (item) =>
        item.username === username &&
        item.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid username or password");
    }

    // Simulated JWT-style token for the frontend experiment
    const fakeToken = btoa(
      JSON.stringify({
        id: foundUser.id,
        username: foundUser.username,
        role: foundUser.role,
        timestamp: Date.now()
      })
    );

    const safeUser = {
      id: foundUser.id,
      username: foundUser.username,
      name: foundUser.name,
      role: foundUser.role,
      roleName: foundUser.roleName,
      accessLevel: foundUser.accessLevel,
      icon: foundUser.icon,
      description: foundUser.description
    };

    localStorage.setItem(
      "campusUser",
      JSON.stringify(safeUser)
    );

    localStorage.setItem(
      "campusToken",
      fakeToken
    );

    setUser(safeUser);
    setToken(fakeToken);

    return safeUser;
  };

  const logout = () => {
    localStorage.removeItem("campusUser");
    localStorage.removeItem("campusToken");

    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user && !!token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}