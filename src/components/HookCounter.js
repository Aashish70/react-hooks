import React from 'react'
import {useState} from 'react'

function HookCounter() {
    
    // count is variable which store the value of state and setCount is function which is used to update the value of state
    const [count, setCount] = useState(0)  // returns the current value of the state property and method that is capable of updating the state of property
    // console.log(useState)

    const clickHandler = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <button onClick={clickHandler}>Count {count}</button>
    </div>
  )
}

export default HookCounter