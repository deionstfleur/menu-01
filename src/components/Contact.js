import React from 'react'
import Navbar from './Navbar'
import '../components/Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div class="position-relative overflow-hidden p-3 p-md-5 text-center contact">
      <div class="col-md-5 mx-auto my-5">
        <h1 style={{color: 'white', fontSize: 75}} class="display-4 font-weight-normal">Contact Us!</h1>
        {/* <p style={{color: 'white'}}  class="lead font-weight-normal">Delicious one-click meal plan!</p> */}
       

        <Link to="/Dinner">
              {/* <a  class="button4" style={{backgroundColor: '#4e9af1'}}>Get Started</a> */}
        </Link>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
            
        </div>
    )
}

export default Contact
