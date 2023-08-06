import React from "react";
import {Link } from "react-router-dom";
import strings from '../locale/strings';

const Navbar = (props) => {

  strings.setLanguage(localStorage.getItem("language"))
  
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
      if(size === font) {
        return
      } else{
        localStorage.setItem("fontSize",size)
      }
    } else{
      if(size === 1){
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
        strings.setLanguage(selectedLanguage)
        localStorage.setItem("language",selectedLanguage)
      }
    } else{
      if(selectedLanguage === "en"){
        return
      } else {
        strings.setLanguage(selectedLanguage)
        localStorage.setItem("language",selectedLanguage)
      }
    }
    window.dispatchEvent(new Event("language"));
  }

   return (
    <nav className={"navbar sticky-top shadow-sm navbar-expand-lg navbar-light py-2 py-lg-0 " + (props.contrast?"":"bg-white")} aria-hidden="true">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" ><img src="/logo.png" className="me-1" width="63" height="50" alt="Tech-Game History App"></img>History App</Link>
      <button className={"navbar-toggler " + (props.contrast?"navbar-dark":"")} type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a href="https://erasmus-plus.ec.europa.eu/" className="navbar-brand collapse multi-collapse navbar-collapse" target="_blank" rel="noreferrer" id="erasmus"><img src="/erasmus_plus.png" width="243" height="50" alt="Erasmus+"></img></a>

      <section className="collapse multi-collapse navbar-collapse pt-4 pt-lg-0 flex-grow-1 justify-content-end" id="navbarSupportedContent">
          <button className={"btn btn-sm btn-floating shadow-sm " + (props.contrast?"btn-outline-light":"btn-outline-dark")} onClick={e => handleContrastChange(e)}>
            <i className="fa fa-eye"></i>
          </button>
          <div className="btn-group btn-group-sm ms-2 shadow-sm" role="group">
            <button type="button" className={"btn " + (props.contrast?"btn-outline-light":"btn-outline-dark")} onClick={e => handleFontChange(3)}>A+</button>
            <button type="button" className={"btn " + (props.contrast?"btn-outline-light":"btn-outline-dark")} onClick={e => handleFontChange(2)}>A</button>
            <button type="button" className={"btn " + (props.contrast?"btn-outline-light":"btn-outline-dark")} onClick={e => handleFontChange(1)}>A-</button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="/#" data-bs-toggle="dropdown" aria-expanded="false">{strings.language}</a>
              <ul className={"dropdown-menu dropdown-menu-end dropdown-menu-light " + (props.contrast?"":"bg-white")}>
                <li><button type="button" className={"dropdown-item " + (props.language==="en"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("en")}><img className="me-1" src="/flag_us.png" alt="flag_us"></img>English</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="it"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("it")}><img className="me-1" src="/flag_it.png" alt="flag_it"></img>Italiano</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="mk"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("mk")}><img className="me-1" src="/flag_mk.png" alt="flag_mk"></img>Македонски</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="nl"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("nl")}><img className="me-1" src="/flag_nl.png" alt="flag_nl"></img>Nederlands</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="pl"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("pl")}><img className="me-1" src="/flag_pl.png" alt="flag_pl"></img>Polski</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="ro"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("ro")}><img className="me-1" src="/flag_ro.png" alt="flag_ro"></img>Română</button></li>
                <li><button type="button" className={"dropdown-item " + (props.language==="tr"? props.contrast?"border border-primary":"active":"")} onClick={e => handleLanguageChange("tr")}><img className="me-1" src="/flag_tr.png" alt="flag_tr"></img>Türkçe</button></li>
              </ul>
            </li>
          </ul>
      </section>
    </div>
  </nav>
    )
};

export default Navbar;