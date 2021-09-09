import React from 'react'
import Navbar from './Navbar'
import '../components/Contact.css'
import {Link} from 'react-router-dom'

const Contact = () => {
    return (
      <div>
      <Navbar />
      <div class="position-relative overflow-hidden p-3 p-md-5 text-center">
<div class="col-md-5 mx-auto my-5">
  <h1 style={{color: 'black', fontSize: 75}} class="display-4 font-weight-normal">Contact</h1>
  <p>Let's Collaborate</p>
  {/* <p style={{color: 'white'}}  class="lead font-weight-normal">Delicious one-click meal plan!</p> */}
</div>
</div>

<div class="container">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
<footer class="py-3 my-4">
<ul class="nav justify-content-center border-bottom pb-3 mb-3">
<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
<li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
</ul>
<p class="text-center text-muted">© 2021 Company, Inc</p>
</footer>


      
  </div>
    )
}

export default Contact
