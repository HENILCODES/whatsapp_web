import React from 'react'
import logo from './IMG/DefaultLogo.png'
export default function DefaultRight() {
    return (
        <div className="center-box center">
            <div className="icon-box">
                <img src={logo} alt="Logo" />
            </div>
            <div className="detail">
                <div className="head">
                    <span className="title">WhatsApp Web</span>
                </div>
                <div className="data">
                    Send and receive messages without keeping your
                    phone online.<br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </div>
            </div>
        </div>
    )
}