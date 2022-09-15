import React from 'react'
import { useReducer } from 'react'
import Preatice from './Preatice'

const UseReducer = () => {
  const intialstate = 0
  const reducer = (state, action) => {
    // console.log(state,action.type);
    if (action.type === 'Increment') {
      return state + 1
    }
    if (action.type === 'Decriment') {
      return state - 1
    }
    if (action.type==="cinccccc") {
         return  state= 1000;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialstate)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'Increment' })}>INCR</button>
      <button onClick={() => dispatch({ type: 'Decriment' })}>DECR</button>
         <h1>End</h1>
        
<button onClick={()=>dispatch({ type:"cinccccc"})}>1000</button>
         <Preatice/>
    </div>
  )
}

export default UseReducer
