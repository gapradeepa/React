import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Form from "./components/Form";

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
    </div>
  );
}
export default App;
