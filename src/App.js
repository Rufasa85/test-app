import Card from "./components/Card/"
import "./styles/App.css"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Welcome!</h1>
      <h3>members</h3>
      <Card name="Joe" description="best teacher ever"/>
      <Card name="Carter"/>
      <Card name="Nile"/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
