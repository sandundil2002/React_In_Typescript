import { useState } from "react";
import './App.css'
import {ButtonComponent} from "./assets/component/ButtonComponent.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>{count}</h1>
            <ButtonComponent count={count} myClick={setCount}>Add</ButtonComponent>
            <ButtonComponent count={count} myClick={setCount}>Subtract</ButtonComponent>
        </div>
    )
}

export default App;