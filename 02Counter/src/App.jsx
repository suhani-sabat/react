import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);

  function addValue(){
    if(counter === 20){
      alert("Cannot add more value!");
    }else{
      setCounter(counter+1);
    }
  }

  function deleteValue(){
    if(counter === 0){
      alert("Cannot delete more value!");
    }else{
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Project</h1>
      <h2>Count: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={deleteValue}
      >Delete Value</button>
    </>
  )
}

export default App


// this is useState is a hook. Hook is used to sync between real update and UI update.