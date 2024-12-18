import './App.css';
import {useReducer} from "react";
import {countReducer} from "./reducers/CountReducer.tsx";

function App() {
    const [count, dispatch] = useReducer(countReducer, 0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT", payload: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT", payload: 1})}>Decrement</button>
        </>
    );
}

export default App;