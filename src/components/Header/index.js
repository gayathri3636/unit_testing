import React from 'react'
import './styles.scss';
import logo from '../../assets/images.png'

export default function Header() {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                <img src={logo} alt="LOGO"/>
                </div>
            </div>
        </header>
    )
}
