// import React from 'react'

// const OOPL = () => {
    // object 
 
// let rama={
//     name:"jivan",
//     sname:"lala",
//     sayname(){
//         console.log(" Hello! "+ this.name+" and your last name is "+this.sname+" fine")
//     },
//   get getname(){
//     return(
//     this.name.toUpperCase()
//     )
//   },
//   set setter(n){
//    return(
//     this.sname.toLowerCase()
//    )
//   }
// }  
// rama.age=55
// rama.name="Goapl"
// console.log("say" in rama);
// console.log(rama);

// console.log(rama.getname);            
// console.log(rama.sayname());
// for(let key in rama)
// {
//     console.log(key);
// }
                            //  Nested Object
//     var rama={
//         name:"Gopal",
//         school:{
//             sch:10,
//             coll:{
//                 add: "kjkfjkjdfkjfk",
//                 name:"christain",
//                 sir:{
//                     pal:"rajpurohit"
//                 }
//             }
//         }
//     }


// console.log(rama.school.coll.sir.pal);



//        // Students ko hum Object cunstuctor fnction kahte h 
//     function Students(frist,last,age,cls){
//         return(
//         this.fristName=frist,
//         this.lastName=last,
//         this.age=age,
//         this.class=cls,
//         this.Nationlitty="Indian"
       
//         )
//         }
    




// badd me kuch properties or method ko constrector funtion me kase add kare 
        
// Students.prototype.religian="Hindu"
// Students.prototype.name=function(){
//     return this.fristName + " "+ this.lastName
// }

// let Students1=new Students("Gopal","Bhagwat",10,3)
        //  ek perticular object me koi funtionalliy or method add karna 
// Students1.nation="Indian"
// Students1.name=function(){
//     return   this.fristName+" "+ this.lastName;
//   }
// let Students2=new Students("VJ","kumer",33,8)
// let Students3=new Students("rj","mer",8,1)
// let Students4=new Students("kl","rama",36,7)
        
// console.log(Students1.name())
        
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default OOPL
import React from 'react'

const OOPL = () => {
  return (
    <div>
      <h1> this is data coming from OOPL.js </h1>
    </div>
  )
}

export default OOPL
