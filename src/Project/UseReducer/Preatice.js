import React from 'react'
import { useReducer } from 'react'

const Preatice = () => {
  const reducer = (state, action) => {
    if (action.type === 'Increment') {
      return state + 5
    }
    if (action.type === 'Decrement') {
      return state - 5
    }
  }
  
  // let rama=prompt("Enter a value")
  let initialstate = 5

  let [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <h1>Preactice</h1>
      <h2>No.{state}</h2>
      <button onClick={() => dispatch({ type: 'Increment' })}>INCRE</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>INCRE</button>
    </div>
  )
}

export default Preatice
