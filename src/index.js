import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/home';
import ComponentQuiz from './components/ComponentQuiz';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('error', e => e.preventDefault());
}

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="quiz/:id" element={<ComponentQuiz/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
