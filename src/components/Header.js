import React from 'react'
import Henil from './IMG/henil.jpg'
import Status from './IMG/StatusLoadIcon.png'
export default function Header() {
    return (
        <header className="d-flex">
            <div className="Himg">
                <div className="imgBox">
                    <img src={Henil} alt="useer" className="c-pointer" />
                </div>
            </div>
            <div className="option d-flex">
                <div className="option-icon p-r">
                    <img src={Status} alt="Status" className='c-pointer' />
                </div>
                <div className="option-icon p-r">
                    <i className="bi bi-chat-left-text-fill"></i>
                </div>
                <div className="option-icon">
                    <i className="bi bi-three-dots-vertical"></i>
                    {/* <div className="More_option">
                        <ul>
                            <li>New Group</li>
                            <li>Starred Messages</li>
                            <li>Settings</li>
                            <li>Log out</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </header>
    )
}