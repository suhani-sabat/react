import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
      style={{backgroundColor: "white"}}>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl'>
          <button 
          onClick={() => setColor("Red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Red"}}
          >Red</button>
          <button 
          onClick={() => setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button 
          onClick={() => setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
