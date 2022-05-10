import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Header = () => {
  return (
    <div>
        <span className='header'>Context Api tutorial</span>
        <ul className='nav'>
        <li>
            <Link to="/">Home</Link>
            </li>
<li>
<Link to="/cart">Cart</Link>

</li>
        </ul>

    </div>
  )
}

export default Header