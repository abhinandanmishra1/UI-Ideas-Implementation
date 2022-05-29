import React from 'react'
import HomeCard from './HomeCard/HomeCard'
import './home.css'
const Home = () => {
  return (
    <div className='main-cards'>
        <HomeCard cardTitle="Card One" cardNumber={1} cardDetails="This is first card" cardLink="card1"/>
        <HomeCard cardTitle="Card Two" cardNumber={2} cardDetails="This is second card" cardLink="card1"/>
    </div>
  )
}

export default Home