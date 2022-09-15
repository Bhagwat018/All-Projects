const incialstate=0;
const ChangeThenumber=(state=incialstate,action)=>{
     
   if (action.type==="INCREMENT") {
     return state+1
   }
     
   if (action.type==="Decrement") {
    return state-1
  }
  }

  export default ChangeThenumber 