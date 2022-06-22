import { useDispatch, useSelector } from "react-redux";
import {incrementar, reduzir} from './store/contador';

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Total: {state}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
    </div>
  )

}

export default App;
