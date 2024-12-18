import './App.css';
import {useReducer, useState} from "react";
import {nameReducer} from "./reducers/NameReducer.tsx";

function App() {
    const [name, nameDispatch] = useReducer(nameReducer, "User Name");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <button onClick={() => nameDispatch({type: "PUSH_NAME", payload: {firstName, lastName}})}>Submit</button>
        </>
    );
}

export default App;