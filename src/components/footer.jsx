import React from "react";

const Footer = () => {
    let year = new Date().getFullYear()

   return (
    <footer className="bg-dark text-center text-white">
    
    <div className="container p-4">
      
      <section>
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/PL-Kenshin/" target="_blank" rel="noreferrer" role="button">
          <i className="fa fa-github"></i>
        </a>
      </section>

    </div>

    <div className="text-center p-3">
      © {year} Copyright: Kenshin (MP), VeelQ (AW), Polibus (EL)
    </div>
    
  </footer>
    )
};

export default Footer;