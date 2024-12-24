import FoodItem from "./foodItem";

export default function FoodList({ foodData, setfoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setfoodId={setfoodId}></FoodItem>
      ))}
    </div>
  );
}
