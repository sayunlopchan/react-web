import React, { useState } from 'react'
const Home = () => {

  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount(() => count+1)
  }
  const handleDecre = () => {
    setCount(() => count-1)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
       onClick={handleIncre}
       className='p-2 bg-gray-500'>Increment</button>
       <br />
      <button
       onClick={handleDecre}
      className='p-2 bg-gray-500'>Decrement</button>
    </div>
  )
}

export default Home