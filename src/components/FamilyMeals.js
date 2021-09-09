import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import '../components/BreakfastPage.css'
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit'
import ai from '../images/ai.png'
import axios from "axios";


const img1 = [
    'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80'
]

const img2 = [
    'https://media.istockphoto.com/photos/grilled-chicken-with-quinoa-and-brown-rice-salad-picture-id506583996?b=1&k=20&m=506583996&s=170667a&w=0&h=iFLP92CrojLkv3Z1rG_1u3_pdDyJc20dEwxwB7OH6JQ='
]

const penne = [
    'https://media.istockphoto.com/photos/penne-with-tomato-sauce-picture-id1179630181?k=20&m=1179630181&s=612x612&w=0&h=wtqVzcUm4uVN2s0h45OEaoxSCfmz3UwiIDXINsF2tt8='
]

const caserole = [
    'https://media.istockphoto.com/photos/portion-of-enchiladas-on-plate-closeup-picture-id939062602?k=20&m=939062602&s=612x612&w=0&h=ZYBpvy7YlMYSnh9QzEXjqpsUBNDLn_tVl21mCtcmaE8='
]

const porkchops = [
    'https://media.istockphoto.com/photos/fried-pork-chops-and-cauliflower-on-wooden-table-picture-id1254759409?k=20&m=1254759409&s=612x612&w=0&h=0iP4kwUQYuUakylwHf0OHiwbxwrR54yF5YpUbN9pZdA='
]

const bowl = [
    'data:image/jpeg;base64,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'
]




export default function FamilyMeals()  {
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary',
        headers: {
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': 'a2f1594c43mshcfc8b347543fdc9p1760bejsnbae4cf27ace5'
        }
      };


      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
 
   

        return (
            <body>
                <Navbar />
                <div class="container">

                    <div>
                        <h1 style={{textAlign: 'center'}}>Family Meals</h1>
                    </div>

                <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">3 meals</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Choose</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">6 meals</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Choose</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">12 meals</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              {/* <li>Help center access</li> */}
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Choose</button>
          </div>
        </div>
      </div>

      <div>
          <div>
          <h2>Meals</h2>
          <hr />
          </div>

          <div>
              <p>On the Menu</p>
          </div>

          <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src={img2} data-holder-rendered="true" />
                <div class="card-body">
                    <h2 style={{fontSize: 20}}>Roasted Chicken and Vegetbales</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src={penne} data-holder-rendered="true" />
                <div class="card-body">
                <h2 style={{fontSize: 20}}>Antipasti Penne</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src={caserole} data-holder-rendered="true" />
                <div class="card-body">
                <h2 style={{fontSize: 20}}>Vegetarian Tortilla Casserole</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src={porkchops} data-holder-rendered="true" />
                <div class="card-body">
                <h2 style={{fontSize: 20}}>Breaded Pork Chops</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src={bowl} data-holder-rendered="true" />
                <div class="card-body">
                <h2 style={{fontSize: 20}}>Bacon and Broccoli Rice Bowl</h2>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20AddBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bae5340cb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bae5340cb%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7109375%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
{/* 
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20AddBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bae5340cb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bae5340cb%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7109375%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20AddBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bae5340cb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bae5340cb%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7109375%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="col-md-4">
              <div class="card mb-4 box-shadow">
              <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%',display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20AddBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bae5340cb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bae5340cb%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.7109375%22%20y%3D%22120.15%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
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

            </body>
        )
    }
    

