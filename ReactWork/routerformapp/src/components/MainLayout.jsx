import React from 'react'
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link  style={{fontSize:'15px', color:'blue', marginLeft:'200px'}} to='/login'>Login</Link>
        <Link style={{fontSize:'15px', color:'blue', marginLeft:'200px'}} to='/register'>Register</Link>
      </nav>
    </div>
  )
}

export default MainLayout