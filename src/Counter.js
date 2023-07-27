import React, { useState } from 'react'

function Counter() {

    const [counter,setcounter] = useState(0)

  return (
    <>
      <button onClick={() => (counter<10) ? setcounter(counter+1) : ''}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => (counter>0) ? setcounter(counter-1) : ''}>Decrement</button>
    </>
  )
}

export default Counter
