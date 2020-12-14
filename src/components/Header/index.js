import React from 'react'
import './styles.scss';
import logo from '../../assets/images.png'

export default function Header() {
    return (
        <header data-test='headerComponent'>
            <div className="wrap">
                <div className="logo">
                <img data-test="logoImg" src={logo} alt="LOGO"/>
                </div>
            </div>
        </header>
    )
}
