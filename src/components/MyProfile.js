import React from 'react'
import Navbar from './Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import '../components/MyProfile.css'

const MyProfile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div>
            <Navbar />
            <div class="container">
        <p className="user-name">Hello {user.name} !</p>


        <h2 style={{textAlign: 'center'}}>Discover Kitchens and Recipes</h2>

        <div style={{marginTop:30}} class="jumbotron p-3 p-md-5 text-white rounded back-jumbo">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

      <div>
          <h2>Categories</h2>
      </div>
            </div>
            

            
        </div>

        )
    )
}

export default MyProfile
