import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  decremented,
  amountAdded,
} from "./features/counter/counter-slice";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function increment() {
    dispatch(incremented());
  }

  function decrement() {
    dispatch(decremented());
  }

  function addAmount() {
    dispatch(amountAdded(5));
  }

  return (
    <>
      <div className="card">
        <button onClick={increment}>increment </button>
        <p>count is {count}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={addAmount}>add 5</button>
      </div>
    </>
  );
}

export default App;
