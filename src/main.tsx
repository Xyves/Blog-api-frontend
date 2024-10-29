import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { App } from "./App.tsx";
import "./index.css";

export const UserContext = createContext();

function Main() {
  const [user, setUser] = useState({});

  const setNewUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setNewUser }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />,
);
