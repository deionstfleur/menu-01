import React from 'react'
import Navbar from '../components/Navbar'
import '../components/Homepage.css'
import ai from '../images/ai.png'
import {Link} from 'react-router-dom'

const homeimage = [
    'https://images.unsplash.com/photo-1556910096-6f5e72db6803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
]

const glutenfree = [
    'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
]

const familymeal = [
    'https://images.unsplash.com/photo-1627662166825-a860471632e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlseSUyMG1lYWx8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
]

const gourmet = [
    'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGdvdXJtZXR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
]

const nutrious = [
    'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80'
]
const Homepage = () => {
    return (
        <body style={{backgroundColor: '#fef9ea !important'}}>
            <Navbar />
    <div class="position-relative overflow-hidden p-3 p-md-5 text-center background">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 style={{color: 'white', fontSize: 75}} class="display-4 font-weight-normal">MyMenu</h1>
        {/* <p style={{color: 'white'}}  class="lead font-weight-normal">Delicious one-click meal plan!</p> */}
       
        <Link to="/Breakfast">
            <a href="something" class="button4" style={{backgroundColor: '#f14e4e'}}>Breakfast</a>
        </Link>
        <Link to="/Lunch">
             <a class="button4" style={{backgroundColor: '#f1bb4e'}}>Lunch</a>
        </Link>
        <Link to="/Dinner">
              <a  class="button4" style={{backgroundColor: '#4e9af1'}}>Dinner</a>
        </Link>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    {/* <div class="container">

      <h2 style={{textAlign: 'center', paddingTop: 20, paddingBottom: 20}}>Join</h2>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>
    </div> */}

    <div class="container">

        <h2 style={{textAlign: 'center', paddingBottom: 30, paddingTop: 20}}>Favorites</h2>

    <div class="row mb-2">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">New</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Weekend Plan</a>
              </h3>
              <div class="mb-1 text-muted">2021</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
             <Link to="/weekend-plan">
                  <a href="#">Learn More</a>
             </Link>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 200, height: 250}} src={glutenfree} data-holder-rendered="true" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">New</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Family Meals</a>
              </h3>
              <div class="mb-1 text-muted">2021</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Learn More</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={familymeal} data-holder-rendered="true" style={{width: 200, height: 250}} />
          </div>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">New</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Gourmet</a>
              </h3>
              <div class="mb-1 text-muted">2021</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Learn More</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 200, height: 250}} src={gourmet} data-holder-rendered="true" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">New</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Nutrious Meal Prep</a>
              </h3>
              <div class="mb-1 text-muted">2021</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Learn More</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={nutrious} data-holder-rendered="true" style={{width: 200, height: 250}} />
          </div>
        </div>
      </div>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold"></a></p>
        </div>
      </div>
    </div>


    <footer class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small class="d-block mb-3 text-muted">© 2021</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
            <li><a class="text-muted" href="#">Random feature</a></li>
            <li><a class="text-muted" href="#">Team feature</a></li>
            <li><a class="text-muted" href="#">Stuff for developers</a></li>
            <li><a class="text-muted" href="#">Another one</a></li>
            <li><a class="text-muted" href="#">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Resource</a></li>
            <li><a class="text-muted" href="#">Resource name</a></li>
            <li><a class="text-muted" href="#">Another resource</a></li>
            <li><a class="text-muted" href="#">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Business</a></li>
            <li><a class="text-muted" href="#">Education</a></li>
            <li><a class="text-muted" href="#">Government</a></li>
            <li><a class="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Team</a></li>
            <li><a class="text-muted" href="#">Locations</a></li>
            <li><a class="text-muted" href="#">Privacy</a></li>
            <li><a class="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>


            
        </body>
    )
}

export default Homepage
