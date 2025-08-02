import React, { useState } from 'react'
import logo from '../images/logo.png'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




function Header() {
    const [darkTheme, setDarkTheme] = useState(false)
    const navigate = useNavigate("")
    const changeDarkTheme = () => {
        const root = document.querySelector("#root")
        if (darkTheme) {
            root.style.background = "#fff"
            root.style.color = "black"
        } else {
            root.style.background = "black"
            root.style.color = "#fff"
        }
        setDarkTheme(!darkTheme)
    }
    return (
        <div className='header'>
            <div className='flex-row' style={{ cursor: "pointer" }} onClick={() => (navigate("/"))}>
                <img className='logo' src={logo} alt='logo' />
                <p className='company-text'>Batu A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search...' />
                <div>
                    {
                        darkTheme ? <MdOutlineLightMode className='icon' onClick={changeDarkTheme} /> : <MdLightMode className='icon' onClick={changeDarkTheme} />
                    }

                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header