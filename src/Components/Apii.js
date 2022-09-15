import React, { useState } from 'react'
import './Apii.css'

const Apii = () => {
  let[nam,setnam]=useState()
  let[job,setjob]=useState()
  let[dat,setdat]=useState()
  
  const clickeh=()=>{
    console.log({nam,job,dat})
    let data={nam,job,dat}

  fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers :{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(data)
  }).then(result=>{
    console.log(result)
  }).catch(e=>{
    console.log(e)
  })
}
  return (
    <div id='dinn'>
     <input type="text" onChange={(e)=>setnam(e.target.value)} value={nam} name="name" id="" /> <br/><br/>
     <input type="text"  onChange={(e)=>setjob(e.target.value)}  value={job} name="name" id="" /><br/><br/>
     <input type="email"  onChange={(e)=>setdat(e.target.value)}   value={dat} name="name" id="" /><br/><br/>
     <button onClick={clickeh} type='button'>Login</button>
    </div>
  )
}

export default Apii
