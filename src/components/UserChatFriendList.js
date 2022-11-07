import React from 'react'
import TempProf from "./IMG/harshil.jpg"
export default function UserChatFriendList(props) {
    return (
        <div className="block">
            <div className="friend-block d-flex">
                <div className="imgB">
                    <div className="friend-img">
                        <img src={TempProf} alt="H" />
                    </div>
                </div>
                <div className="friend-detail w-100">
                    <div className="friend-name d-flex">
                        <div className="f-name"> <span>{props.name}</span></div>
                        <div className="f-active"> <span className="lig-color">{props.prev_active}</span></div>
                    </div>
                    <div className="friend-last-chat d-flex">
                        <div className="left">
                            <i className="bi bi-check2"></i>
                            <span className="lig-color Prchat" >{props.prev_chat}</span>
                        </div>
                        <div className="right">
                            <i className="bi bi-chevron-down" id='chat_more_op'></i>
                            {/* <div className="chat_more_option">

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}