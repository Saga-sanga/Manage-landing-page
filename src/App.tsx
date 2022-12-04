import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <h2 className='text-bold font-sans'>Hello Sanga!</h2>
      <p className='text-white bg-black'>Cmon!! Why no work?</p>
    </div>
  )
}

export default App
