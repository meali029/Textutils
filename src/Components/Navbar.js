import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
//   const changemode=()=>{
//     if (modetext==="Light Mode") {
//     setmodetext("Dark Mode")    
//     }
//     else{
//       setmodetext("Light Mode")
//     }
//   }
//   const [modetext,setmodetext] =useState(
// "Dark Mode"
//   )

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label mx-3 text-${props.mode=== 'light' ? 'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
</div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
    </>
  )
}
Navbar.prototype = {
title : PropTypes.string,
aboutText : PropTypes.string,
mode: PropTypes.string.isRequired,
toggleMode: PropTypes.func.isRequired
}