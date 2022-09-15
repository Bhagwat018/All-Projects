import './App.css'
import Footer from './Comspo2/Footer'

import Navbar from './Comspo2/Navbar'
import Project1 from './Project/Project1/Project1'
import Project2 from './Project/Project2/Project2'
// import Apii from './Components/Apii';
// import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom'
import Project3 from './Project/Project3/Project3'
import Project4 from './Project/Project4/Project4'
import Project5 from './Project/Project5/Project5'
import Home from './Components/Home'
import Frist from './Project/JS cons. Revi/Frist'
import Frist11 from './Project/Js React Re/Frist11'
import React from 'react'
import Usecontex from './Project/UseContect/Usecontex'
import { createContext } from 'react'
import UseReducer from './Project/UseReducer/UseReducer'
// import Redux from './Project/Redux/Redux'
import RBoot from './Project/R Bootstrep/RBoot'
import Key1 from './Project/For Key/Key1'
// import { Provider } from 'react-redux'
// import store from './Store';
const PAPA=createContext()
const Mum=createContext()
const value=createContext()
const rama=createContext()
function App() {
  // const ramas=()=>{
  //   let rasa=prompt("what is your age")
  //   if (rasa<18) {
  //    document.write("you are under teen age")
  //    setTimeout(() => {
  //     prompt("what is your dream")
         
  //    }, 2000);
     
  //   }
  //   if (rasa>18) {
  //     document.write("you are teen age")
  //    setTimeout(() => {
  //     prompt("what is your doing in your life")
         
  //    }, 2000);
     
  //   }
  //   ramas();
  // }
  return (
    <div>
      <Navbar title={'My Work'} kalu="dd" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
        <Route path="/Project4" element={<Project4 />} />
        <Route path="/Project5" element={<Project5 />} />
        <Route path="/jsconceptrevi" element={<Frist />} />
        <Route path="/Reactjspreactice" element={<Frist11 />} />
        <Route path="/UseReducer" element={<UseReducer/>} />
        <Route path="/ReactBoots" element={<RBoot/>} />
        <Route path="/Addthought" element={<Key1/>} />
   
      </Routes>
      <Footer />
      {/* <Provider store={store}>
        <Route path="/Redux" element={<Redux/>} />
        </Provider> */}
       <PAPA.Provider value={"mukesh"}>
        <Mum.Provider value={"Shitel"}>
          <value.Provider value={true}>
            <rama.Provider value={"click"}>
            <Usecontex/>   
            </rama.Provider>
               
          </value.Provider>
   
        </Mum.Provider>
 
       </PAPA.Provider>
     
       
    </div>
  )
}

export default App
export { PAPA,Mum,value,rama }
