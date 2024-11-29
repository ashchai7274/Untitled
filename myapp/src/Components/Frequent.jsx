import React from 'react'
import '../Styles/frequent.css'

const Frequent = () => {
  return (
    <>
    <div className="freq">
        <div className="head">
            <h1>Frequently asked questions</h1>
            <p>Everything  you need to know about the  product and billing.</p>
        </div>

        <div className="questions">
            <ul>
                <li>Is there a free trial  available ?</li>
                 <li style={{color:"gray"}}>Yes, you can try us for 30 days. If you want,we'll provide you with a free personalized <br />
                 30-minute onboarding call to get you up and running as soon as possible</li>
                <li>Can I change my plan later? </li>
                <li>What is your cancellation policy?</li>
                <li>Can other info be added to an invoice?</li>
                <li>How does billing work?</li>
                <li>How do I change my account email</li>
            </ul>
        </div>
    </div>

    <div className="last">
        <img src="/Images/avatar.png" alt="" />
        <h1>Still have questions?</h1>
        <p>Can't find  the answer you're looking for? Please chat to our friendly team.</p>
        <button>Get in touch</button>
    </div>

      
    </>
  )
}

export default Frequent
