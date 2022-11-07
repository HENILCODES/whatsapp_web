import React from 'react'
import Header from './components/Header'
import Searchbox from './components/Searchbox'
import UserChatFriendList from './components/UserChatFriendList'

export default function Leftside() {
  // const user = {
  //   "N1":{
  //     "name":"Henil",
  //     "active":"9:30 am",
  //     "chat":"Hello"
  //   },
  //   "N2":{
  //     "name":"Henil",
  //     "active":"9:30 am",
  //     "chat":"Hello"
  //   },
  //   "N3":{
  //     "name":"Henil",
  //     "active":"9:30 am",
  //     "chat":"Hello"
  //   },
  //   "N4":{
  //     "name":"Henil",
  //     "active":"9:30 am",
  //     "chat":"Hello"
  //   },
  //   "N5":{
  //     "name":"Henil",
  //     "active":"9:30 am",
  //     "chat":"Hello"
  //   },
   
  // }
  // const s = ()=>{
  //   user.forEach(element => {
  //     console.log(element);
  //   });
  // }
  return (
    <div className="left-box">
      <Header />
      <Searchbox />
      <div className="user-friend">
        <UserChatFriendList name="Henil" prev_active="9:30 am" prev_chat="Hello" />
       
      </div>
    </div>
  )
}