import React from 'react'
import { Link } from 'react-router-dom'
import '../css/error.css';
const Error = () => {
  return (

    <div className = 'errorText'>
      <div className = 'uk-text-bold uk-text-center '>
       <h2 className = 'error'>404</h2>
       <p className = 'uk-text-larger'> Page not found</p>
       <p> The page you are looking for might have been removed or is temporarily unavailable</p>
       <button className ="uk-button uk-text-large"><Link to = '/'> Back Home </Link></button>
       </div>
     </div>

  )
}

export default Error