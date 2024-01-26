import { Token } from "../../types";


type PropType = {
  setSessionToken: React.Dispatch<React.SetStateAction<Token | null>>;
};

const Fetch = (props: PropType) => {

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(props);
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