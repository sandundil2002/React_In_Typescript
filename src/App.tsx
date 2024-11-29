import './App.css'
import ButtonComponent from "./assets/component/ButtonComponent.tsx";
import {useState} from "react";

function App() {

    const [content, setContent] = useState("Default")

    const handleClick = (name: string) => {
        let desc;
        subjects.map((subject) => {
            if(subject.name === name) {
                desc = subject.desc
            }
        })
        setContent(name)
        alert(desc)
    }

    const subjects = [
        {
            name: "RAD",
            desc: "Rapid Application Development"
        },
        {
            name: "DBMS",
            desc: "Database Management System"
        },
        {
            name: "OOP",
            desc: "Object Oriented Programming"
        }
    ]

  return (
    <>
        {
            subjects.map((subject) => (
                <ButtonComponent myClick = {handleClick} >{subject.name}</ButtonComponent>
            ))
        }

        <br/>
        <button>{content}</button>
    </>
  )
}

export default App;