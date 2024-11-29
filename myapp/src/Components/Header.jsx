import React from 'react'
import '../Styles/header.css'
const Header = () => {
  return (
    <>
    <div className="container">

            <div className="btn">
                <button>New feature</button>
            </div>

            <div className="text">
                <p>Check out the team dashboard</p>
                <img src="/Images/next.png" alt="" />
            </div>
      
    </div>

    <div className="para">
        <h1>Beautiful analytics to grow  smarter</h1>
    </div>
    <div className="detail">
      <p>Powerful, self-serve product and growth  analytics  to help you convert , engage, <br />
        and retain more users. Trusted by over 4,000 startups.</p>
    </div>
      
      <div className="btns">
        <button id='btn1'><img id='img' src="/Images/play.png" alt="" />Demo</button>
        <button id='btn2'>Sign up</button>
      </div>
    </>
  )
}

export default Header
