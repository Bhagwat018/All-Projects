import React from 'react'
import { useState } from 'react'

import main from './main'

const Project4 = () => {
  let[calu,setcalu]=useState(main)
  const changeh=(value)=>{
    
     const ramji=main.filter((ram=>(
        
        ram.cate===value
        
      )))
      setcalu(ramji)
    }
  
  return (
    <div>
      <p>plz select any one to there item</p>
      <button onClick={()=>changeh("Dinner")}>Dinner</button>
      <button onClick={()=>changeh("lanch")}>lanch</button>
      <button onClick={()=>changeh("breakfast")}>breakfast</button>
   
      <button onClick={()=>changeh("Dinner")}>Dinner</button>
      <button onClick={()=>changeh()}>All</button>
      


      {calu.map((ran) => (
        <div>
          <img src="https://picsum.photos/200/300" alt="imgnotfound" />
          <h1>{ran.name}</h1>
          <h3>{ran.cate}</h3>
          <p>{ran.lorem}</p>
        </div>
      ))}

      <h1>Project4</h1>
    </div>
  )
}

export default Project4
