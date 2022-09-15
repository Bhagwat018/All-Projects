import React from 'react'
import { useState } from 'react'

const Project2 = () => {
  let [im, setim] = useState([])
  let [imm, setimm] = useState([])
  const changeh = (e) => {
    console.log(e.target.value)
    setim(e.target.value)
  }

  let thiss = `https://source.unsplash.com/random/?${im}`
  const clickh = () => {
    setimm(thiss)
  }
  return (
    <div>
      <input type="text" onChange={changeh} name="" id="" />
      <img src={!imm?"https://source.unsplash.com/random/?car":imm} alt="" />
      <button onClick={clickh}>CLick</button>
    </div>
  )
}

export default Project2
