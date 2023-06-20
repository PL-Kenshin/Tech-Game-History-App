import React from "react";
import {Link } from "react-router-dom";

const Navbar = (props) => {

  console.log(props.language)
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

  const handleLanguageChange = (selectedLanguage) => {
    let language = localStorage.getItem("language")
    if(language){
      if(selectedLanguage === language) {
        return
      } else{
        localStorage.setItem("language",selectedLanguage)
      }
    } else{
      if(selectedLanguage === "en"){
        return
      } else {
        localStorage.setItem("language",selectedLanguage)
      }
    }
    window.dispatchEvent(new Event("language"));
  }

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 py-lg-0">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" ><img src="/logo.png" className="me-1" width="63" height="50" alt="Tech-Game History App"></img>History App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <section className="collapse navbar-collapse pt-4 pt-lg-0 flex-grow-1 justify-content-end" id="navbarSupportedContent">
          <button className="btn btn-sm btn-outline-light btn-floating" role="button" onClick={e => handleContrastChange(e)}>
            <i className="fa fa-eye"></i>
          </button>
          <div className="btn-group btn-group-sm ms-2" role="group">
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(3)}>A+</button>
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(2)}>A</button>
            <button type="button" className="btn btn-outline-light" onClick={e => handleFontChange(1)}>A-</button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
              <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                <li><button type="button" className={"dropdown-item " + (props.language==="en"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("en")}><img className="me-1" src="/flag_us.png"></img>English</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="pl"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("pl")}><img className="me-1" src="/flag_pl.png"></img>Polski</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="tr"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("tr")}><img className="me-1" src="/flag_tr.png"></img>Türkçe</button></li>
              </ul>
            </li>
          </ul>
        <a href="https://erasmus-plus.ec.europa.eu/" className="navbar-brand ms-lg-2 ms-0" target="_blank" rel="noreferrer"><img className="mt-2 mt-lg-2" src="/erasmus_plus.png" width="243" height="50" alt="Erasmus+"></img></a>
      </section>
    </div>
  </nav>
    )
};

export default Navbar;