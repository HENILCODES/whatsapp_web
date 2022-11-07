import React from 'react'
import logo from './IMG/DefaultLogo.png'
export default function DefaultRight() {
    return (
        <div class="center-box center">
            <div class="icon-box">
                <img src={logo} alt="Logo" />
            </div>
            <div class="detail">
                <div class="head">
                    <span class="title">WhatsApp Web</span>
                </div>
                <div class="data">
                    Send and receive messages without keeping your
                    phone online.<br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </div>
            </div>
        </div>
    )
}