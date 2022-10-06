import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from  './actions'

function App() {
  const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return ( 
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {/* {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''} */}
    </div>
  );
}

export default App;

/*
const [counter, setCounter] = useState(0);
const [name, setName] = useState("Dolapo");
setCounter(1)

reducers hold states
actions changing states: dispatch(), useSelector()
store combines or holds the reducers



 */