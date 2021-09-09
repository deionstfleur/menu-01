import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import '../components/About.css'

const text = [
  'https://images.unsplash.com/photo-1527731408889-923dbf5f1b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHx0ZXh0aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
]

const foodrow = [
  'https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
]

const About = () => {
    return (
        <div>
            <Navbar />
            <div class="position-relative overflow-hidden p-3 p-md-5 text-center background2">
      <div class="col-md-5 mx-auto my-5">
        <h1 style={{color: 'white', fontSize: 75}} class="display-4 font-weight-normal">About Us</h1>
        {/* <p style={{color: 'white'}}  class="lead font-weight-normal">Delicious one-click meal plan!</p> */}
       

        <Link to="/Dinner">
              <a  class="button4" style={{backgroundColor: '#4e9af1'}}>Get Started</a>
        </Link>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    <div className="container">
        <h2 className="how-works">How it Works</h2>

        <div class="container marketing">



        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Curated Meals at your fingetips</h2>
            <p class="lead">With the options of choosing your own meals at the tip of your fingers your have the option to get scheduled meals at any time of day,</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: 500, height: 350, borderRadius: 20}} src={text} data-holder-rendered="true" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette" style={{marginTop: 60}}>
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            <a class="button4" style={{backgroundColor: 'blue'}}>Learn More</a>

          </div>
          <div class="col-md-5 order-md-1">
          <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{width: 600, height: 300, borderRadius: 20}} src={foodrow} data-holder-rendered="true" />

          </div>
        </div>

  

  


      </div>

    </div>
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li> */}
    </ul>
    <p class="text-center text-muted">© 2021 Company, Inc</p>
  </footer>
   

            
        </div>
    )
}

export default About
