import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import { App } from "./App.tsx";
import "./index.css";
import { fetchUserProfile } from "./api/Auth.ts";

export const UserContext = createContext<{
  user: { nickname: string };
  setNewUser: (newUser: { nickname: string }) => void;
}>({
  user: { nickname: "" }, // default or placeholder nickname
  setNewUser: () => {}, // no-op function as a default
});

function Main() {
  const [user, setUser] = useState(null);

  const setNewUser = (newUser: { nickname: string }) => {
    setUser(newUser);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Replace fetchUserProfile with your actual function
      fetchUserProfile().then((userData) => {
        if (userData) {
          setUser(userData);
        }
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setNewUser }}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />,
);
