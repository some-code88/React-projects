import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
 
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=> {
    let pwd = ""
    let strValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
      strValue+="0123456789"
    if(charAllowed)
      strValue+= "!@#$%^&*()_+"
    for(let i=1;i<length;i++){
     const index =  Math.floor(Math.random() * strValue.length + 1)
     pwd+=strValue.charAt(index)
    }

    setPassword(pwd)

  }, [length,numberAllowed,charAllowed])

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(()=> {
    generatePassword()
  },[length,numberAllowed,charAllowed])


  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-emerald-900 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            >
              Copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            className='cursor-pointer'
            value={length}
            onChange={(e) => setLength(e.target.value)}   
            name=""
            id="" />
            <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            className='cursor-pointer'
            onChange={() => {setNumberAllowed((prev) => !prev )
            }}
            name=""
            id=""
            />
            <label htmlFor="number">Number?</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            className='cursor-pointer'
            onChange={() => {setCharAllowed((prev) => !prev )}}
            name=""
            id=""
            />
          <label htmlFor="characters">Character?</label>
        </div>
      </div>
    </div>
  )
}

export default App
