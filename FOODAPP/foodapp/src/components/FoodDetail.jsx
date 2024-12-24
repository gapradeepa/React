import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "86f4b0830dd9442983d9cf03b1f3a706";

  const [food, setfood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFoodDetail() {
      console.log(URL);
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setfood(data);
      setIsLoading(false);
    }
    fetchFoodDetail();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt=""></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes </strong>{" "}
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🤠  Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong> $ {food.pricePerServing / 100} per serving </strong>
          </span>
        </div>
      </div>

      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading}></ItemList>

      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
