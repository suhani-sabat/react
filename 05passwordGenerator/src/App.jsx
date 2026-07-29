import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed) {
      str += "@#$%&*~"
    }

    for(let i = 0; i < length; i++){
      let idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // function can be used like this 
  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed])


  // copy 
  const passwordRef = useRef(null)
  const copy = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    // this method is applicable in react but in node js

    // using useRef
    passwordRef.current?.select()
  }, [password])
  

  return (
    <> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          ref={passwordRef}
          readOnly
          />
          <button
          onClick={copy}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {6}
            max = {20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange= {() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
