import { useState } from "react";
import { useReducer } from "react";

export default function BankAccountReducer() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    } else if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }

  return (
    <>
      <br></br>
      <div>
        <h1>Bank Account Balance : {state.balance}</h1>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button
          onClick={() => dispatch({ type: "add", payload: Number(amount) })}
        >
          Deposit
        </button>
        <button
          onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
        >
          Withdraw
        </button>
      </div>
    </>
  );
}
