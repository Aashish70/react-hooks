import React, {useReducer} from 'react'

const initialState = 0


const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1 // return new state(action)
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function MultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState) // returns two values, state and dispatch method
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)


  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        
        <div>Count - {countTwo}</div>
        <button onClick={() => dispatchTwo('increment')}>Increment</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default MultipleReducer