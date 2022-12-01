import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage.js';
import Registered from './Pages/RegistrationPage.js';
import CartPage from './Pages/Cart.js'
import LogPage from './Pages/LogPage.js';
import Creditcardregistration from './Pages/Navigation-Pages/creditcardregistration';
import Navbar from './Pages/NavBars/Navbar.js';
import ITDash from './Pages/Dashboards/IT_Department.js';
import IT from './Pages/NavBars/ITnavbar.js';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';


export class App extends React.Component {
  render() {
    return (<div>


      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<ITDash />} />
          <Route path="register" element={<Registered />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="register/finaccreg" element={<Creditcardregistration/>}/>
          {/* <Route path="ITDash" element={<ITDash/>}/> */}
        </Routes>
      </BrowserRouter>

    </div>

    );

  }

}

export default App;