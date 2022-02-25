import { useState } from "react";

import Card from "./components/Card/"
import "./styles/App.css"
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0)
  const [people, setPeople] = useState(["Joe","Carter","Nile","Chrissie"])
  const buttonClick = e=>{
    setCounter(counter+1)
  }
  const resetCount = e=>{
    setCounter(0)
  }

  return (
    <div className="App">
      <Header/>
      <h1>Welcome!</h1>
      <button onClick={buttonClick}>Clicks: {counter}</button>
      <button onClick={resetCount}>reset count</button>
      <h3>There are {people.length} members!</h3>
      {people.map(person=><Card name={person}/>)}
    </div>
  );
}

export default App;
