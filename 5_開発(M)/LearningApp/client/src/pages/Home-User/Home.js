import React from 'react'
import Background from './Background'
import SearchPart from './Search_part'
import Navbar  from '../../components/Navbar';

const Home = (props) => {
  return(
    <div>
      <Navbar/>
      <Background/>
      <SearchPart/>
    </div>
  )
}
export default Home
