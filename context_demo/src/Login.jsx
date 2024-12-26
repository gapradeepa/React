import { useState } from "react";
import { userContext } from "./App";
import { useContext } from "react";

const Login = () => {
  const [value, setValue] = useState("");
  const { user, setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
