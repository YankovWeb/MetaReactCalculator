import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);

 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault()
    setResult((result)=> result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault()
    setResult((result)=> result * Number(inputRef.current.value))
  }; 
 
  function divide(e) { 
    e.preventDefault()
    setResult((result)=> result ? result / Number(inputRef.current.value): 0 )
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault()
    inputRef.current.value = 0
  }; 
 
  function resetResult(e) { 
  	e.preventDefault()
    setResult((result)=> result = 0)
  };
  
 const Numb = (e) => {
            e.preventDefault();
            inputRef.current.value += +e.target.textContent
          }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        
        <div className="container">
          <button onClick={Numb} >1</button>
          <button onClick={Numb}>2</button>
          <button onClick={Numb}>3</button>
          <button onClick={Numb}>4</button>
          <button onClick={Numb}>5</button>
          <button onClick={Numb}>6</button>
          <button onClick={Numb}>7</button>
          <button onClick={Numb}>8</button>
          <button onClick={Numb}>9</button>
          <button onClick={Numb}>0</button>
        </div>
        <button onClick={plus}>add</button> 
        {/* Add the subtract button */}
        <button onClick={minus}>subtract</button> 
        {/* Add the multiply button */}
        <button onClick={times}>myltiply</button> 
        {/* Add the divide button */}
        <button onClick={divide}>divide</button> 
        {/* Add the resetInput button */}
        <button onClick={resetInput} className="red">reset input</button> 
        {/* Add the resetResult button */}
        <button onClick={resetResult} className="red">reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
