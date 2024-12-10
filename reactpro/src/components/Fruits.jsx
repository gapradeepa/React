import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pierce"];

  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎🍏",
      soldout: true,
    },
    {
      name: "Mango",
      price: 10,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Banana",
      price: 10,
      emoji: "🍌",
      soldout: true,
    },
    {
      name: "Orange",
      price: 10,
      emoji: "🍊🟠",
      soldout: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return <Fruit key={fruit.name} fruit={fruit} />;
        })}
      </ul>
    </div>
  );
}
