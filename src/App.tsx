import "./App.css";
import { useEffect, useState } from "react";
import { getToken, clearToken, getData } from "./components/API/API";
import { Token } from "./types";
import React from "react";
import { useProfileContext } from "./components/Context/ProfileContext";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Auth from "./components/Auth/Auth";

const { Content } = Layout;

const App: React.FC = () => {
  const [sessionToken, setSessionToken] = useState<Token>(null);
  // const [loading, setLoading] = useState(false);

  const { user, bookList, setBookList } = useProfileContext();

  useEffect(() => {
    setContext();
  }, []);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSessionToken(clearToken());
  };

  const protectedViews = () => {
    return sessionToken ? <>You got Auth</> : <>Authless peasant.. Begone!!</>;
  };

  const setContext = async () => {
    const storedToken: string | null = getToken();
    if (storedToken !== null) {
      setSessionToken(storedToken);
      const res = await getData("http://localhost:4000/book/get/all");
      setBookList(res?.data.content);
      console.log(bookList);
    } else {
      clearToken();
    }
  };

  return (
    <Layout>
      <Header />
      <Content style={{ padding: "48px" }}>
        <Auth />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
