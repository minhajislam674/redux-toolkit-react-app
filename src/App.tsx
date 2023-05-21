import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useState } from "react";
import {
  incremented,
  decremented,
  amountAdded,
} from "./features/counter/counter-slice";

import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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
      <div className="card">
        <p>Dogs to fetch:</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt="dog" height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
