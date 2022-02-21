import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {

 
  const [mode, setMode] = useState(false)
  const appClass = mode ? "App dark" : "App light"
  const screenMode = mode ? "Dark Mode" : "Light Mode"
  

  function handleMode() {
    setMode((mode) => !mode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button className={screenMode} onClick={handleMode}>{screenMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
