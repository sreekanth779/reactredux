import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Number =  {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>Add</button>
      <button onClick={() => dispatch(decrement(3))}>Sub</button>
      <h5>** Add / reduce muliples of 3 </h5>
      {isLogged ? <h3>Valuable info</h3> : ''}
    </div>
  );
}

export default App;
