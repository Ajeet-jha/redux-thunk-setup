import {useSelector, useDispatch} from "react-redux"
import { fetchData } from "./store/asyncThunk/demoThunk";
function App() {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.demo);
  console.log(data);
  
  return (
    <h1>
      hello world!
      <button onClick={() => dispatch(fetchData())}>click</button>
    </h1>
  )
}

export default App
