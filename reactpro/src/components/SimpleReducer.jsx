import { useReducer } from "react";

export default function SimpleReducer() {
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "inc") {
      return state + action.payload;
    } else {
      return state - action.payload;
    }
  }

  return (
    <div>
      <div>State Value: {state}</div>
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
