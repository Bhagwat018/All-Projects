import React from 'react'
import {Link} from "react-router-dom"
import { propTypes } from 'react-bootstrap/esm/Image'
const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">{props.title}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Project1">Project1</Link>
        </li>
        
        {props.kalu==="ture"?<li class="nav-item">
          <Link class="nav-link" to="/Project2">Project2</Link>
        </li>:""}
        <li class="nav-item">
          <Link class="nav-link" to="/Project3">Project3</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Project4">Project4</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Project5">Project5</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/jsconceptrevi">Js Conceps R.</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Reactjspreactice">React Con R </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Usecontex"> Usecontex</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/UseReducer"> UseReducer</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Redux"> Redux</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ReactBoots">RBootstrep</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Addthought"> For Key</Link>
        </li>
     
     
      
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.prototype={
  title : propTypes.string 
}



export default Navbar
