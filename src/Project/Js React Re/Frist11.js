import React from 'react'
import { useState } from 'react';
import Secand from './Secand';

const Frist11 = () => {
  let[data,setdata]=useState("")
    let rama={
        name:"vijay",
        sname:"Bhagwat",
        say(){
            console.log("Hello Gyes !");
        }
    }

const ramesh=(chadd)=>{

  
      // console.log(chadd);
}
ramesh()
const jungnu=()=>{
   let rasa=prompt("what is your age")
   if (rasa<18) {
    setdata("you are under teen age")
    setTimeout(() => {
     prompt("what is your dream")
        
    }, 2000);
    
   }
   if (rasa>18) {
    setdata("you are teen age")
    setTimeout(() => {
     prompt("what is your doing in your life")
        
    }, 2000);
    
   }
}

  return (
    <div>
      
      <Secand value={rama} kal={ramesh} fun={jungnu}  val={data}/>

    </div>
  )
}

export default Frist11
