import React from 'react'
import '../Styles/features.css'

const Features = () => {
  return (
    <>
     
    <div className="main">
        <h4>Features</h4>

        <div className="par">
            <h1>Analytics feels like it's from the future</h1>
        </div>
        <div className="tex">
        <p>Powerful, self-serve product and growth  analytics  to help you convert , engage, <br />
         and retain more users. Trusted by over 4,000 startups.</p>
        </div>
         
         <div className="cards">

             <div className="card">
                <img src="/Images/chat.png" alt="" />
                <div className="list">
                    <h2>Share team inboxes</h2>
                    <p>Whether you have a team  of 2 or 200, our shared  <br />
                    team inboxes keep everyone on the same page <br />
                    and in loop.</p>
                </div>
             </div>

             <div className="card">
                <img src="/Images/thunder.png" alt="" />
                <div className="list">
                    <h2>Deliver instant answers</h2>
                    <p>An all-in-one customer service platform that helps <br />
                    you balance everything  your customers need to be <br />
                    happy.</p>
                </div>
             </div>

            
             <div className="card">
                <img src="/Images/swirly-scribbled-arrow.png" alt="" />
                <div className="list">
                    <h2>Managfe your teams with reports</h2>
                    <p>Measure what matters with Untitled's easy-to-use <br />
                    reports.You can filter, export, and  drilldown on the <br />
                    data in a couple clicks.</p>
                </div>
             </div>

             <div className="card">
                <img src="/Images/circle.png" alt="" />
                <div className="list">
                    <h2>Connect with customers</h2>
                    <p>Solve a probelm  or close a sale in real-time with <br />
                    chat.If no one available, customers are <br />
                    seamlessly  routed  to email without confusion.</p>
                </div>
             </div>

             <div className="card">
                <img src="/Images/square-graphic-of-four-lines-and-four-circles-on-the-corners.png" alt="" />
                <div className="list">
                    <h2>Connect the tools you already use</h2>
                    <p>Explore 100+  integrations that make  your <br />
                    day-to-day workflow  more efficient  and familiar. <br />
                    Plus, our extensive developer  tools. </p>
                </div>
             </div>
             <div className="card">
                <img src="/Images/chat-bot.png" alt="" />
                <div className="list">
                    <h2>Our people make the differences</h2>
                    <p>We're an extension  of your  customer service team ,<br />
                    and all of our resources  are free. Chat  to our <br />
                    friendly  team 24/7 when you need  help.
                    </p>
                </div>
             </div>

         </div>
        
    </div>


    <div className="name">
        <img src="/Images/lightning.png" alt="" />
        <h3>Sisyphus</h3>
    </div>

    <div className="item">
        <p>We've been using Untitled  to kick start every new  <br />
        project and can't imagine working  withoutit.</p>
    </div>

     <div className="i">
        <img src="/Images/profile.png" alt="" />
        <h4>Candice Wu</h4>
        <p>Product Manager, Sisyphus</p>

     </div>
      
    </>
  )
}

export default Features
