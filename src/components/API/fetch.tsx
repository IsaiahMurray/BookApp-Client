import { useState, useEffect } from "react";
import { postData } from "./API";
import { Token } from "../../types";

type PropType = {
  setSessionToken: React.Dispatch<React.SetStateAction<Token | null>>;
};
const Fetch = (props: PropType) => {

  // const [bookArr, setBookArr] = useState([]);
  const [bodyData, setBodyData] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    const body = { email: "murray.isaiah13@gmail.com", password: "test" };
    setBodyData(body);
    setUrl("http://localhost:4000/user/login");
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await postData(url, bodyData);
      props.setSessionToken(res?.data.content.token);
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
