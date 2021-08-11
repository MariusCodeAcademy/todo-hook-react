import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <Counter />
        <Counter />
        <Counter />
      </div>
      <button>ResetAll</button>
    </div>
  );
}

export default App;
