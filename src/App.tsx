import './App.css'
import {Dashboard} from "./assets/component/Dashboard.tsx";
import {Login} from "./assets/component/Login.tsx";

function App() {
    const isLoggedIn = false;
    let content;

    if (isLoggedIn) {
        content = <Dashboard />;
    } else {
        content = <Login />;
    }

  return (
    <>
        {content}
    </>
  )
}

export default App;