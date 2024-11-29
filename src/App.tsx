import './App.css'
import ItemList from "./assets/component/ItemList.tsx";

function App() {
    const itemList = [
    { name: 'Item1' , description: 'description1'},
    { name: 'Item2' , description: 'description2'},
    { name: 'Item3' , description: 'description3'},
    ]

  return (
    <>
        <ItemList name={itemList[0].name} description={itemList[0].description} />
        <ItemList name={itemList[1].name} description={itemList[1].description} />
        <ItemList name={itemList[2].name} description={itemList[2].description} />
    </>
  )
}

export default App