import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer"

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="container pt-5 min-vh-100">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
