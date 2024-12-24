import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Reducer() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Nav");
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Home</button>
      </div>
      <div>
        <Link to="/reducer/SimpleReducer">SimpleReducer</Link>
      </div>
      <div>
        <Link to="/reducer/ComplexReducer">ComplexReducer</Link>
      </div>
      <div>
        <Link to="/reducer/complexobjectReducer">ComplexobjectReducer</Link>
      </div>
      <div>
        <Link to="/reducer/BankAccountReducer">BankAccountReducer</Link>
      </div>
      <div> </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
}
