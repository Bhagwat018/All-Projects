import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber } from './Actions'
import { DecNumber } from './Actions'

const Redux = () => {
       
    const mystate=useSelector((state)=>state.ChangeThenumber)
    const dispatch=useDispatch()
  return (
    <div>
    <input type="text" value={mystate} /> <br />
 <br />
    <button onClick={()=>dispatch(incNumber())}>Incr</button>
    <button onClick={()=>dispatch(DecNumber())}>Decr</button>
  
    </div>
  )
}

export default Redux
