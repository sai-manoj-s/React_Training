import "./style.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import reactLogo from '../../assets/react.svg'
import { useState } from "react"
import SingUp from "../Body/SignUp";

const navItems = ["Home","About","Settings"]
function Navbar() {

return(
    <>
    <div className="navbar">
      <div className="navLogo">
      <img src={reactLogo} className="logo" alt="Vite logo" />
      <span>React Training</span>
      </div>
        <ul>
          {navItems.map((item) =>
            <li className="nav__link"><a >{item}</a></li>
          )}
          <SingUp/>
        </ul>

    </div>
    </>
)
}

export default Navbar