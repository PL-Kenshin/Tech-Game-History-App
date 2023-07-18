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

function App() {
  let contrast = JSON.parse(localStorage.getItem("isHighContrastOn"))
  let fontSize = parseInt(localStorage.getItem("fontSize"))
  let language = localStorage.getItem("language")
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
  const [hightContrast, setHighContrast] = useState(contrast?contrast:false)
  const [userfontSize, setUserFontSize] = useState(size)
  const [userLanguage, setUserLanguage] = useState(language?language:"en")


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

  return (
    <div className="container-fluid p-0">
      <Helmet>
        {hightContrast && <style>
          {`
            * {
              color:yellow !important;
              background-color: black !important;
              --bs-bg-opacity:0 !important;
            }
          `}
        </style>}
        <style>
          {`
            * {
              font-size:${userfontSize}%
            }
          `}
        </style>
      </Helmet>
      <Navbar language={userLanguage} contrast={hightContrast}/>
      <div className="container pt-5 min-vh-100">
      <ErrorBoundary>
        <Outlet context={[userLanguage]}/>
      </ErrorBoundary>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
