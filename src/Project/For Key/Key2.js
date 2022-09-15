import React from 'react'

const Key2 = () => {
    let rama={
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px',
        curser :'pointer'
    }
    var jsonData = {
        "users": [
            {
                "name": "alan", 
                "age": 23,
                "username": "aturing"
            },
            {
                "name": "john", 
                "age": 29,
                "username": "__john__"
            }
        ]
      }
    const handleClick=()=> {
    
        // Send data to the backend via POST
        fetch('', {  // Enter your IP address here
    
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    
        })
        
      }
      // let ramas=()=>{
      //   debugger;
      //   for(let i=0;i<5;i++)
      //   {
      //     alert("this is aleat")
          

      //   }
      //      }
      // ramas()
  return (
    <div>
          <buttonon onclo={handleClick} style={rama}>data to api</buttonon>  
    </div>
  )
}

export default Key2
