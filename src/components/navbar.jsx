import React from "react";
import {Link } from "react-router-dom";

const Navbar = (props) => {

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand"><img src="/logo.png" className="me-1" width="63" height="50" alt="Tech-Game History App"></img>History App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <section className="collapse navbar-collapse pt-4 pt-lg-0 flex-grow-1 justify-content-end" id="navbarSupportedContent">
          <a className="btn btn-outline-light btn-floating" href="#" role="button">
            <i className="fa fa-eye"></i>
          </a>
          <div className="btn-group ms-2" role="group">
            <button type="button" className="btn btn-outline-light">A+</button>
            <button type="button" className="btn btn-outline-light">A</button>
            <button type="button" className="btn btn-outline-light">A-</button>
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