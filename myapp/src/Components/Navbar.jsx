import React from 'react'
import '../Styles/navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src="/Images/ul.svg" alt="" />
        </div>
        <div className="header"><h2>Untitled UI</h2></div>
        <div className="list">
            <ul>
                <li><a href="" className='space'>Home</a></li>
                <li><a href="" className='prod'>Products</a><img  className='down' src="/Images/down.png" alt="" /></li>
                <li><a href="">Resources</a> <img className='down' src="/Images/down.png" alt="" /></li>
                <li><a href="" className='space'>Pricing</a></li>
            </ul>
        </div>
        <div className="profile">
            <img src="/Images/profile.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar
