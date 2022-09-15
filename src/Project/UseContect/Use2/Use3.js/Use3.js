import React from 'react'
import { useContext } from 'react'
import { PAPA, Mum,value,rama } from '../../../../App'
const Use3 = () => {
  //    with the help of   usecontext
  const fname = useContext(PAPA)
  const lname = useContext(Mum)
  const non = useContext(value)
  const valse=useContext(rama)

    // const chansjsk=()=>{
    //   valse();
    // }

  return (
    <>
    { non?
        <h1>
        this is my father name {fname} this is my mother name  {lname}{' '}
        <button >{valse}</button>
      </h1>:""
      }
</>

    //   Ye ta context Api  (call-back-hall)
    // <div>
    //   return
    //   <>
    //     <FristName.Consumer>
    //    it only expect function
    //       {(fname) => {
    //         return (
    //           <>
    //             <LastName.Consumer>
    //               {(lname) => {
    //                 ;<h1>
    //                   This is My {fname} and {lname}
    //                 </h1>
    //               }}
    //             </LastName.Consumer>
    //           </>
    //         )
    //       }}
    //     </FristName.Consumer>
    //   </>
    // </div>
  )
}

export default Use3
