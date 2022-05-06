import logo from './logo.svg';
import * as React from 'react';
import './App.css';

var stud = [{name: "Ajay", roll: 1, mark1: 90, mark2: 59, mark3: 82, total:0,},
              {name: "Balu", roll: 2, mark1: 84, mark2: 93, mark3: 63, total:0},];

const Test = () =>{
  return(
    stud.map(item=>(
      <p>
        <span>Name: {item.name} </span>
        <span>Roll: {item.roll} </span>
        <span>Total: {item.total= item.mark1 + item.mark2 + item.mark3} </span>
      </p>
    ))
  )
}

function App() {
  const [count, setCount] = React.useState(0);

  const Increase = () => {
    setCount(count+1)
  }

  const Decrease = () => {
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Test />
      <div>
        Count: {count}
        <div>
          <button type="button" onClick={Increase}>
            Increase
          </button>
          <button type="button" onClick={Decrease}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/badri75"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </header> */}