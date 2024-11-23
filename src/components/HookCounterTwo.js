import React, {useState} from 'react'

function HookCounterTwo() {

    const[count, setCount] = useState(0)

    const incrementHandler = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementHandler = () => {
        setCount(prevCount => prevCount - 1)
    }

    const resetHandler = () => {
        setCount(0)
    }

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
        Count : {count}
        <button onClick={resetHandler}>Reset</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo