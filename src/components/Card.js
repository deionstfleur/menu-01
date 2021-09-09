import React from 'react'

const Card = ({ items, isLoading}) => {
    return (
        <div>
<div class="card">
  <img src="img_avatar.png" alt="Avatar" style={{width: '100%'}} />
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect  Engineer</p> 
  </div>
</div>
        </div>
    )
}

export default Card
