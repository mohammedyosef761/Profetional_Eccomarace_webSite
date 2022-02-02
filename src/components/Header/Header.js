import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../LogOut/LogOut';
import './Header.css'

function Header(){
  // const cartItems= JSON.parse(localStorage.getItem("cartItems"));
  let cartItems= useSelector(state=>state.counter.cartItems);

    return(
        <header>
           <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Shopping Cart</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative" id="collapsibleNavbar">
      <ul className="navbar-nav ">
      <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle unstyled-none " href="#" role="button" data-bs-toggle="dropdown">sign up/in</a>
  <ul className="dropdown-menu bg-dark">
    <li><a className="dropdown-item text-info" href="#"><Link to="Signup" className="text-info bg-dark text-decoration-none p-1 "> sign up</Link></a></li>
    <li><a className="dropdown-item text-info" href="#"> <Link to="SignIn" className="text-info bg-dark text-decoration-none p-1">sign in</Link></a></li>
  </ul>
</li>
        <li className="nav-item">
        <Link  className="nav-link " to="CreateProduct">CreateProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ShoppingNow">shopping now</Link>
        </li>
   
 <li className="nav-item">
          
          {
          (JSON.parse(localStorage.getItem('loginEmail'))&& JSON.parse(localStorage.getItem('loginPassword')))
          ?<Link className="nav-link" to="Logout">Logout</Link>
          :<Link className="nav-link" to="SignIn">Login</Link>
          
          }          
  
        </li>
      </ul>
    </div>

    <h3 className='text-light text-right '><i className="fa fa-shopping-cart"><Link to="Cart" className='text-danger'>{cartItems.length}</Link></i>
   
</h3>

  </div>
</nav>
        </header>
    )
}
export default Header;