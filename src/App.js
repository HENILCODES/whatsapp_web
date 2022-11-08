import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'
export default function App() {
  
  return (
    <div className="main-box">
      <div className='box'>
        <Leftside />
      </div>
      <div className="w-100">
        <Rightside />
      </div>
    </div>

  )
}