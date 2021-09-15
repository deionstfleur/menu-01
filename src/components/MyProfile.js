import React from 'react'
import Navbar from './Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import '../components/MyProfile.css'
import PostData from './data/dummy.json'
import Sidebar  from './Sidebar'

const MyProfile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div>
            <Navbar />
            {/* <Sidebar /> */}
            <div class="container">


        {/* <h2 style={{textAlign: 'center'}}>Discover Kitchens and Recipes</h2> */}

        <div style={{marginTop:30}} class="jumbotron p-3 p-md-5 text-white rounded back-jumbo">
        <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Meals and more delivered to your door</h1>
        <img className="food-profile" src={user.picture} />
        {/* <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p> */}
        </div>
    </div>
            <div>
                    <p className="user-name">Hello {user.name}</p>
                    <h2 className="ct-profile" >Discover Recipes and Kitchens</h2>

                    <div style={{paddingTop: 13}}>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>All</a>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>Breakfast</a>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>Lunch </a>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>Dinner</a>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>Desert</a>
                    <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer'}}>Beverages</a>
                    </div>

                    <h4 style={{textAlign: 'center', paddingTop: 50}}>Still working, please come back later ....</h4>



            </div>
      <div>
          {PostData.map((postDetail, index) => {
              return (
                  <>
                {/* <h1 className="pt-detail">{postDetail.name}</h1> */}
                <div>
                {/* <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h1 class="card-title">{postDetail.name}</h1>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                 </div> */}
{/* 
                    <div class="row" style={{paddingTop: 40}}>

                        <div class="col-lg-4 col-xs-12">
                            <div className="meal-box" style={{backgroundColor: '#e7e7e7',height: 200, width: 300, borderRadius: 20, paddingTop: 20}}>
                                 <h1>{postDetail.name}</h1>
                                 <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer',margin: 'auto'}}>Add to Cart</a>

                            </div>
                        </div>

                        <div class="col-lg-4 col-xs-12">
                            <div className="meal-box" style={{backgroundColor: '#e7e7e7',height: 200, width: 300, borderRadius: 20, paddingTop: 20}}>
                                 <h1>{postDetail.name}</h1>
                                 <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer',margin: 'auto'}}>Add to Cart</a>

                            </div>
                        </div>

                        <div class="col-lg-4 col-xs-12">
                            <div className="meal-box" style={{backgroundColor: '#e7e7e7',height: 200, width: 300, borderRadius: 20, paddingTop: 20}}>
                                 <h1>{postDetail.name}</h1>
                                 <a class="food-button" style={{backgroundColor: '#fff', border: '1px solid #000', color: '#000', cursor: 'pointer',margin: 'auto'}}>Add to Cart</a>
                            </div>
                        </div>

                    </div> */}
                </div>
                </>
                
              )
          })}


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
        </div>

        )
    )
}

export default MyProfile
