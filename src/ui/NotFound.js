import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={() => nav(-1)}>GO BACK!</button>
    </div>
  )
}

export default NotFound