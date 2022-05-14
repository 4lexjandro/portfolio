import React from 'react'

const Navbar = () => {


  return (
   
  <div class="top-0 sticky top-0 z-30 w-full  px-1 py-1 bg-pink-900 shadow-xl shadow-orange-600/20 sm:px-1">

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Contact</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            
          </a>
          
        </li>
       
      </ul>
    </div>
    <div>Spinning A</div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Contact</a></li>
      <li tabindex="0">
        <a>
         Work
          
        </a>
        
      </li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <div>Spinning M</div>
  </div>
</div>





    </div>
  )
}

export default Navbar