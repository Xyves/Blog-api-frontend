import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { UserInterface } from "./interface.ts";
import { App } from "./App.tsx";
import "./index.css";
import { fetchUserProfile } from "./api/Auth.ts";

export const UserContext = createContext<{
  user: UserInterface | null;
  setNewUser: (newUser: UserInterface | null) => void;
}>({
  user: null,
  setNewUser: () => undefined,
});

function Main() {
  const [user, setUser] = useState<{ nickname: string } | null>(null);

  const setNewUser = (newUser: UserInterface | null | any) => {
    setUser(newUser);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
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
