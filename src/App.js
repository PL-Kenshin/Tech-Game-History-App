import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'

import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer"
import ErrorBoundary from "./components/ErrorBoundary"
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import dyslexic from './fonts/DyslexicFZF-Regular.ttf';

function App() {
  let contrast = JSON.parse(localStorage.getItem("isHighContrastOn"))
  let fontSize = parseInt(localStorage.getItem("fontSize"))
  let language = localStorage.getItem("language")
  let fontFamily = JSON.parse(localStorage.getItem("fontFamily"))
  if(language === null) {
    localStorage.setItem("language", "en")
  }
  if(fontFamily === null) {
    localStorage.setItem("fontFamily", false)
  }
  let size = 100
    switch (fontSize) {
      case 3:
        size=105
        break;
      case 2:
        size=100
        break;
      case 1:
        size=95
        break;
      default:
        size=100
        break;
    }
  const [highContrast, setHighContrast] = useState(contrast?contrast:false)
  const [userfontSize, setUserFontSize] = useState(size)
  const [userLanguage, setUserLanguage] = useState(language?language:"en")
  const [userFontFamily, setUserFontFamily] = useState(fontFamily !== null ?fontFamily:false)

  window.addEventListener('contrast', () => {
    contrast = JSON.parse(localStorage.getItem("isHighContrastOn"))
    setHighContrast(contrast)
  })
  window.addEventListener('fontSize', () => {
    fontSize = parseInt(localStorage.getItem("fontSize"))
    size = 100
    switch (fontSize) {
      case 3:
        size=105
        break;
      case 2:
        size=100
        break;
      case 1:
        size=95
        break;
      default:
        size=100
        break;
    }
    setUserFontSize(size)
  })

  window.addEventListener('language', () => {
    language = localStorage.getItem("language")
    setUserLanguage(language)
  })
  window.addEventListener('fontFamily', () => {
    fontFamily = JSON.parse(localStorage.getItem("fontFamily"))
    setUserFontFamily(fontFamily)
  })

  return (
    <div className="container-fluid p-0">
      <Helmet>
        {highContrast && <style>
          {`
            * {
              color:yellow !important;
              background-color: black !important;
              &::before, &::after {
                background-image: none !important;
              }
              
            }
            .jumbo {
              background-image: none !important;
            }
          `}
        </style>}
        <style>
          {`
            @font-face {
              font-family: "Dyslexic";   /*Can be any text*/
              src: local("DyslexicFZF-Regular"),
                url(${dyslexic}) format("OpenType");
            }
            * {
              font-size:${userfontSize}%;
              font-family:"${userFontFamily?"Dyslexic":"Arial"}";
            }
          `}
        </style>
      </Helmet>
      <Navbar language={userLanguage} contrast={highContrast}/>
      <div>
      <ErrorBoundary>
        <Outlet context={[userLanguage, highContrast]}/>
      </ErrorBoundary>
      </div>
      <Footer contrast={highContrast}/>
    </div>
  );
}

export default App;
