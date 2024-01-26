import { useState, useEffect } from "react";
import { postData, getData, updateData, updateToken, getToken, } from "./API";
import { Token } from "../../types";
import {userLoginBody, userRegisterBody, bookUpdateBody, userUpdateBody, bookPostBody} from "./dummyData";

type PropType = {
  setSessionToken: React.Dispatch<React.SetStateAction<Token | null>>;
};

const Fetch = (props: PropType) => {
  // const [bookArr, setBookArr] = useState([]);
  // const [bodyData, setBodyData] = useState({});
  // const [url, setUrl] = useState("");
  useEffect(() => {
    console.log("Props", props);
    updateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3MDYyODgwMDEsImV4cCI6MzQxMjU3NzIwMn0.2OrWqvXBGOz3spNx3MCqkSJ2p6hPY38FZmfP-4K-rrg")
  }, []);

  const get = (url: string, qArr?: number[]): void => {
    const res = getData(url, qArr);
    console.log(res);
  };
  const post = (url: string, body: Record<string, unknown>): void => {      
    const res = postData(url, body);
    console.log(res);
    // props.setSessionToken(res?.data.content.token);
  };

  const put = (url: string, body: Record<string, unknown>): void => {
    const res = updateData(url, body);
    console.log(res);
  };

  // const destroy = (url: string): void => {};
  // const patch = (url: string, body: Record<string, unknown>): void => {};

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(getToken())
      get("http://localhost:4000/book/get-tags", [3,13]);
      // post("http://localhost:4000/book/create", bookPostBody);
      // put("http://localhost:4000/user/update/username", userUpdateBody);
      // bookPatchBody();
      // destroy();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <h2>API</h2>
      <button onClick={handleClick}>Le Button</button>
    </>
  );
};

export default Fetch;
