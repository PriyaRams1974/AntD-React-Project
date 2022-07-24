import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Productlistantd from './components/list-antd';

function App() {
  // const[loginStatus, setLoginStatus] = useState(0)
  // useEffect(()=>{
  //   console.log("loginStatus",loginStatus);
  //   let status = localStorage.getItem("loginstatus");
  //   setLoginStatus(status);
  //  },[])
  return (
    <Router>
      {/* {
          loginStatus == 0 ? <Login/> : <Navbar/>
        } */}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                  <li className="nav-item">
                  <Link className="nav-link" to={'/productlist-antd'}>
                    Sign up
                  </Link>
                </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/productlist-antd" element={<Productlistantd />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App