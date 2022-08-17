import {useSelector, useDispatch} from 'react-redux'
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  const addBy = () => {
    dispatch({type: 'ADD_BY', payload: 100});
  }


  return (
    <div>
      <h1>Counter App </h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
