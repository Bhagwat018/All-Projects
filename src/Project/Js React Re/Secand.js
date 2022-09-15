import React from 'react'
// import { useState } from 'react'

const Secand = (props) => {
    // let[data,setdata]=useState(props.value)


    let kajor={
      name:"kuldip",
      sname:"rawan",  
    }

    props.kal(kajor)
 const oncilckh=()=>{
  props.fun();
 }
 function rsaa(...all){
      if (all.length===0) {
        alert("Plz enter any NUmber")
      } else {
        let sum=0;
        for(let i=0;i<all.length;i++){
            sum=sum+all[i]
           console.log(sum);
        }   
      
      }

  
 }
 rsaa(5,69);
  return (
    
    <div>
{/* {
props.value.map((nono)=>(
    <h1>{nono.name}</h1>
))
} */}

 {/* } */}
 <h1>{props.value.name}</h1>
 <h2>{props.val}</h2>
 <button onClick={oncilckh}>Click</button>
    </div>
  )
}

export default Secand
