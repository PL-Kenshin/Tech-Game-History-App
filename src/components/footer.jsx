import React from "react";

const Footer = (props) => {
  let year = new Date().getFullYear()

  return (
    <footer className={"text-center text-white " + (props.contrast?"":"bg-dark")} aria-hidden="true">

      <div className="text-center p-4">
        © {year} Mateusz Ptak, Adrian Wilk, Eryk Łuszczkiewicz. Some rights reserved.
      </div>

      <div className="container pb-4">
        <section>
          <a className="btn btn-outline-light btn-floating shadow-sm" href="https://github.com/PL-Kenshin/" target="_blank" rel="noreferrer" role="button">
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>


    </footer>
  )
};

export default Footer;