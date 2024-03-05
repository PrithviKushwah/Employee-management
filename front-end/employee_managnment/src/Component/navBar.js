import React from 'react'
import './css/navBar.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

function navBar() {
  return (
    <div>
      <ul class="nav">
  <Link to="/"><li><a href="#">Home</a></li></Link>
  <Link to="/addemployee"><li><a href="#">Addemployee</a></li></Link>
  <Link to="/login"><li><a href="#">login/logout</a></li></Link>

 
</ul>
    </div>
  )
}

export default navBar
