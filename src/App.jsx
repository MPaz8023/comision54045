import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <>
      <h1>Candy Shop</h1>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos al mundo Candy"}/>

      
    </>
  )
}

export default App
