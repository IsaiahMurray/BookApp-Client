import Fetch from "./components/API/fetch";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import { getToken, clearToken } from "./components/API/API";
import { BookContext, BookContextType } from "./components/Context/BookContext";
import { Token } from "./types";
import React from "react";
import { useProfileContext } from "./components/Context/ProfileContext";

function App() {
  const [sessionToken, setSessionToken] = useState<Token>(null);
  // const [loading, setLoading] = useState(false);

  const { books } = useContext(BookContext) as BookContextType;
  const { user } = useProfileContext();

  useEffect(() => {
    const storedToken: string | null = getToken();
    if (storedToken !== null) {
      setSessionToken(storedToken);
    } else {
      clearToken();
    }
    console.log(books);
  }, []);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSessionToken(clearToken());
  };

  const protectedViews = () => {
    return sessionToken ? <>You got Auth</> : <>Authless peasant.. Begone!!</>;
  };

  return (
    <div className="app">
      {protectedViews()}
      <h2>{user ? `Logged in as ${user.username}` : "Not logged in"}</h2>

      <Fetch setSessionToken={setSessionToken}/>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default App;
