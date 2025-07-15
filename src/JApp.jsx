import { useEffect, useCallback, useState,useRef } from 'react'


function App() {
  const [lenght, setLenght] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState('')

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*()_+[]{}|;':,./<>?`~"

    for (let i = 0; i <= lenght; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1)
      pass += str[randomIndex]
    }
    setPassword(pass)




  }, [lenght, setNumber, setCharacter, setPassword])

  useEffect(() => {
    PasswordGenerator()
  }, [lenght, number, character, PasswordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={lenght}
            className='cursor-pointer'
            onChange={(e) => setLenght(e.target.value)}
            />
            <label >Lenght : {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => setNumber((prev) => !prev)}
            />
            <label> Numbers</label>


          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={character}
              id='characterInput'
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label> Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
