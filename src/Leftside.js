import React from 'react'
import Header from './components/Header'
import Searchbox from './components/Searchbox'
import UserChatFriendList from './components/UserChatFriendList'

export default function Leftside() {
  return (
    <div className="left-box">
      <Header />
      <Searchbox />
      <div className="user-friend">
        <UserChatFriendList name="Henil" prev_active="9:30 am" prev_chat="Hello" />
        <UserChatFriendList name="Harshil" prev_active="9:30 am" prev_chat="Hello" />
        <UserChatFriendList name="Kevin" prev_active="9:30 am" prev_chat="Hello" />
      </div>
    </div>
  )
}