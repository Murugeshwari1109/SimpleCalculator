import './App.css';
import { useState } from'react';
function App() {
  
 const [input,setInput]=useState('');
 const [result,setResult] = useState('');
 const handleClick=(value)=>()=>{
    setInput(input+value);
 };
 const handleEqual=()=>{
  try{
    setResult("="+eval(input));
  }
  catch(e){
    // setResult('Invalid input');
    alert("Invalid input")
  }
    
 }
 const handleBackspace=()=>{
    setInput(input.slice(0,-1));
 }
 const handleClear=()=>{
    setInput('');
    setResult('');
 }
 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 "
    // style={{background:'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'}}
    >
      <div className="text-3xl font-bold mb-4 text-gray-700">Simple Calculator</div>
      <div className="w-80 h-[8vh]  p-3 text-3xl rounded-lg bg-gray-200 mb-4" >
        <span>{input}</span><span>{result}</span>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-80">
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClear}>Clear</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleBackspace}>X</button>
          <button className="bg-gray-200 p-4 rounded-lg " onClick={handleClick('%')}>%</button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg" onClick={handleEqual}>=</button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-gray-200 p-4 rounded-lg "onClick={handleClick('7')}>7</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('6')}>8</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('5')}>9</button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg" onClick={handleClick('/')}>/</button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('4')}>4</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('3')}>5</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('2')}>6</button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg" onClick={handleClick('*')}>*</button>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('1')}>1</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('2')}>2</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('3')}>3</button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg" onClick={handleClick('-')}>-</button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="bg-gray-200 p-4 rounded-lg"onClick={handleClick('00')}>00</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('0')}>0</button>
          <button className="bg-gray-200 p-4 rounded-lg" onClick={handleClick('.')}>.</button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg" onClick={handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
