import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Form from "./components/Form";
import SimpleReducer from "./components/SimpleReducer";
import ComplexReducer from "./components/ComplexReducer";
import ComplexobjectReducer from "./components/ComplexobjectReducer";
import BankAccountReducer from "./components/BankAccountReducer";

function App() {
  const person = {
    name: "Bob",
    message: "Hello there...",
    emoji: "❤️",
    seatnumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  return (
    <div className="App">
      <Hello person={person}></Hello>
      <Fruits />
      <Form></Form>
      <br></br>
      <SimpleReducer></SimpleReducer>
      <ComplexReducer></ComplexReducer>
      <ComplexobjectReducer></ComplexobjectReducer>
      <BankAccountReducer></BankAccountReducer>
    </div>
  );
}
export default App;
