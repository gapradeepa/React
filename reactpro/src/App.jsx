import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Form from "./components/Form";
import SimpleReducer from "./components/SimpleReducer";
import ComplexReducer from "./components/ComplexReducer";
import ComplexobjectReducer from "./components/ComplexobjectReducer";
import BankAccountReducer from "./components/BankAccountReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Reducer from "./components/Reducer";
import Products from "./components/Products";

function App() {
  const person = {
    name: "Bob",
    message: "Hello there...",
    emoji: "❤️",
    seatnumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav></Nav>}></Route>
        <Route path="/Hello" element={<Hello person={person}></Hello>}></Route>

        <Route path="/fruits" element={<Fruits />}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/products/:id" element={<Products></Products>}></Route>
        <Route path="/reducer" element={<Reducer></Reducer>}>
          <Route
            path="SimpleReducer"
            element={<SimpleReducer></SimpleReducer>}
          ></Route>
          <Route
            path="ComplexReducer"
            element={<ComplexReducer></ComplexReducer>}
          ></Route>
          <Route
            path="ComplexobjectReducer"
            element={<ComplexobjectReducer></ComplexobjectReducer>}
          ></Route>
          <Route
            path="BankAccountReducer"
            element={<BankAccountReducer></BankAccountReducer>}
          ></Route>
        </Route>

        <Route path="*" element={<Nav></Nav>}></Route>
      </Routes>
    </BrowserRouter>
  );

  // <div className="App">
  //   <Hello person={person}></Hello>
  //   <Fruits />
  //   <Form></Form>
  //   <br></br>
  //   <SimpleReducer></SimpleReducer>
  //   <ComplexReducer></ComplexReducer>
  //   <ComplexobjectReducer></ComplexobjectReducer>
  //   <BankAccountReducer></BankAccountReducer>
  // </div>
}
export default App;
