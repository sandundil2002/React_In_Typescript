import './App.css'
import ButtonComponent from "./assets/component/ButtonComponent.tsx";

function App() {

    const handleClick = (name: string) => {
        subjects.map((subject) => {
            if(subject.name === name) {
                alert(subject.desc)
            }
        })
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
        <ButtonComponent myClick = {handleClick} >{subjects[0].name}</ButtonComponent>
        <ButtonComponent myClick = {handleClick} >{subjects[1].name}</ButtonComponent>
        <ButtonComponent myClick = {handleClick} >{subjects[2].name}</ButtonComponent>
    </>
  )
}

export default App;