import Button from "./Button";

export default function Fruit({ fruit }) {
  return (
    <li key={fruit.name}>
      <h4 key={fruit.name + "h"}>
        {" "}
        {fruit.name}: ${fruit.price} {fruit.emoji}{" "}
        {fruit.soldout ? "soldout" : <Button name="Buy"></Button>}
      </h4>
    </li>
  );
}
