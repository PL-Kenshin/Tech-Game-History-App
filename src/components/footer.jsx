import React from "react";
import strings from '../locale/strings';

const Footer = (props) => {
  let year = new Date().getFullYear()
  strings.setLanguage(localStorage.getItem("language"))

  return (
    <footer className={"text-center text-white " + (props.contrast ? "" : "bg-dark")} aria-hidden="true">
      <div className="container py-5 text-light">
        <p>Teaching History for Disabled Students through Digitalized Gamification Tools<br />
          {strings.projectReference}: 2021-1-PL01-KA220-SCH-000023916</p>
        <p>This project has been funded with support from the European Commission.
          This publication reflects the views only of the authors, and the
          Commission cannot be held responsible for any use which may be made of
          the information contained therein. This work is licensed under a
          Creative Commons Attribution-Share Alike 4.0 International</p>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top text-secondary">
          <p>© {year} Mateusz Ptak, Adrian Wilk, Eryk Łuszczkiewicz. Some rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-light" href="https://github.com/PL-Kenshin/" target="_blank" rel="noreferrer" role="button">
                <i className="fa fa-github" style={{ fontSize: 30 }}></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
};

export default Footer;