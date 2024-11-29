import React from 'react'
import '../Styles/blog.css'

const Blog = () => {
  return (
    <>
    <div className="blog">
        <div className="star">
            <p>Our blog</p>
            <button>View all posts</button>
        </div>
    </div>
    <div className="row">
        <h1>Latest blog posts</h1>
        <p>Tool and strategies modern teams need to help  their companies grow.</p>
    </div>

           <div className="blogcard">

           <div className="cards">
                <img src="/Images/mobile.webp" alt="" />
                <div className="lists">
                    <p>Design</p>
                    <h2>UX review presentations</h2>
                    <p>How do you  create  compelling  presentations that <br />
                    wow your colleagues and impress your managers?</p>
                </div>
                <div className="data">
                    <img src="/Images/avatar.png" alt="" />
                    <p>Olivia Rhye</p>
                    <p>20 jan 2024</p>
                </div>
             </div>

             <div className="cards">
                <img src="/Images/company.webp" alt="" />
                <div className="lists">
                    <p>Product</p>
                    <h2>Migrating to Linear 101</h2>
                    <p>Linear helps streaming software projects, sprints, <br />
                    tasks, and bug  tracking.Here's how to get started.</p>
                </div>
                <div className="data">
                    <img src="/Images/avatar.png" alt="" />
                    <p >Phoenix Baker</p>
                    <p>19 jan 2024</p>
                </div>
             </div>

             <div className="cards">
                <img src="/Images/profile.png" alt="" />
                <div className="lists">
                    <p>Software Engineering</p>
                    <h2>Building your API stack</h2>
                    <p>The rise of RESTfull API's has been met by a rise in <br />
                    tools for creating, testing, and managing them.</p>
                </div>
                <div className="data">
                    <img src="/Images/avatar.png" alt="" />
                    <p>Lana Steiner</p>
                    <p>18 jan 2024</p>
                </div>
             </div>
           </div>
      
      <br />

      <div className="trial">
        <h1>Start your free trial</h1>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
      </div>
      <div className="but">
        <button id='b1'>Learn more</button>
        <button id='b2'>Get started</button>
      </div>


    
    </>
  )
}

export default Blog
