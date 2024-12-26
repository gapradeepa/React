import { createContext } from "react";
import "./App.css";
import Checkout from "./Checkout";
import { useState } from "react";
import Login from "./Login";
export const userContext = createContext(); //Creating context

function App() {
  const [user, setUser] = useState("guest");
  return (
    <>
      <div>
        <userContext.Provider value={{ user, setUser }}>
          <Login></Login>
          <Checkout></Checkout>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
