import React from 'react'
import './home.css'
import { useNavigate } from 'react-router'
const Home = () => {
  const navigate=useNavigate();
  const goToComponent=(slug)=>{
    navigate(`/${slug}`);
  }
  return (
    <div className='main'>
        <div className="main-heading">
          <h1>Welcome to my styling project</h1>
        </div>
        <div className="components">
        <div className='component' onClick={()=>goToComponent("cards")}>
           Cards
        </div>
        <div className='component' onClick={()=>goToComponent("buttons")}>
           Buttons
        </div>
        <div className='component' onClick={()=>goToComponent("texts")}>
           Texts
        </div>
        </div>
    </div>
  )
}

export default Home