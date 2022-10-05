import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incremnet } from "./redux/actions";

export default function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  const handleBtn = () => {
    console.log(" I am called");
    dispatch(incremnet(1));
  };

  return (
    <div className="App">
      <h1>count:{counter}</h1>
      <button type="button" onClick={handleBtn}>
        +
      </button>
    </div>
  );
}
