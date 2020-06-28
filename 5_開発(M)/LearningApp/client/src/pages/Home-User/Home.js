import React from 'react'
import Navbar from '../../components/Navbar'
import FooterPage from '../../components/Footer_contact'
import Background from './Background'
import SearchPart from './Search_part'

const Home = () => {
  return (
      <div>
        <Navbar/>
        <Background/>
        <SearchPart/>
        <FooterPage/>
      </div>
  )
}

export default Home