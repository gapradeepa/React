import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div>
        <Link to="/Hello">Hello</Link>
      </div>
      <div>
        <Link to="/fruits">fruits</Link>
      </div>
      <div>
        <Link to="/Reducer">Reducer</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/form">Form</Link>
      </div>
      {/* <div>
        <Link to="/SimpleReducer">SimpleReducer</Link>
      </div>
      <div>
        <Link to="/ComplexReducer">ComplexReducer</Link>
      </div>
      <div>
        <Link to="/complexobjectReducer">ComplexobjectReducer</Link>
      </div>
      <div>
        <Link to="/BankAccountReducer">BankAccountReducer</Link>
      </div> */}
    </>
  );
}
