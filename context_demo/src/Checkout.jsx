import { useContext } from "react";
import { userContext } from "./App";

const Checkout = () => {
  //Consuming context
  const { user } = useContext(userContext);

  return <div>Checkout {user}</div>;
};
export default Checkout;
