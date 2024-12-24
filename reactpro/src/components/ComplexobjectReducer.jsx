import { useReducer } from "react";

export default function ComplexobjectReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    if (action.type === "inc") {
      return { ...state, count: state.count + state.incrementBy };
    } else if (action.type === "dec") {
      return { ...state, count: state.count - state.incrementBy };
    } else if (action.type === "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <div>
      {state.count}
      <input
        type="text"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
      ></input>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}> Decrement</button>
    </div>
  );
}
