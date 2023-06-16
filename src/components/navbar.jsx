import React from "react";
import {Link } from "react-router-dom";

const Navbar = (props) => {

  const handleContrastChange = (event) => {
    let contrast = localStorage.getItem("isHighContrastOn")
    if(contrast){
      contrast = JSON.parse(contrast)
      localStorage.setItem("isHighContrastOn",!contrast)
    } else{
      localStorage.setItem("isHighContrastOn","true")
    }
    window.dispatchEvent(new Event("contrast"));
  }

  const handleFontChange = (size) => {
    let font = localStorage.getItem("fontSize")
    if(font){
      if(size == font) {
        return
      } else{
        localStorage.setItem("fontSize",size)
      }
    } else{
      if(size == 1){
        return
      } else {
        localStorage.setItem("fontSize",size)
      }
    }
    window.dispatchEvent(new Event("fontSize"));
  }

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" ><img src="/logo.png" className="me-1" width="63" height="50" alt="Tech-Game History App"></img>History App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <section className="collapse navbar-collapse pt-4 pt-lg-0 flex-grow-1 justify-content-end" id="navbarSupportedContent">
          <button className="btn btn-outline-light btn-floating" role="button" onClick={e => handleContrastChange(e)}>
            <i className="fa fa-eye"></i>
          </button>
          <div className="btn-group ms-2" role="group">
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(3)}>A+</button>
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(2)}>A</button>
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(1)}>A-</button>
          </div>
          <div className="btn-group ms-2" role="group">
            <button type="button" className="btn btn-outline-light"><img src="/flag_us.png"></img></button>
            <button type="button" className="btn btn-outline-light"><img src="/flag_pl.png"></img></button>
            <button type="button" className="btn btn-outline-light"><img src="/flag_tr.png"></img></button>
          </div>
        <a href="https://erasmus-plus.ec.europa.eu/" className="navbar-brand ms-lg-2 ms-0" target="_blank" rel="noreferrer"><img className="mt-2 mt-lg-2" src="/erasmus_plus.png" width="243" height="50" alt="Erasmus+"></img></a>
      </section>
    </div>
  </nav>
    )
};

export default Navbar;