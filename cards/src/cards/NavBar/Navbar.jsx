import React from 'react'
import "./navbar.css";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const goToHome=()=>{
    navigate('/');
  }
  return (
    <div className='navbar' >
      <span onClick={goToHome} className="home">Home</span>
    </div>
  )
}

export default Navbar