import React from 'react'
import Words_list from '../../components/Words_list'
import Ico2 from '../../Images/Words_List/EN.jpg'

const Home = (props) => {
  return(
    <div className="masthead">
      <div id="Current_Best">
        <div className="container">
          <h2 className="text-center mt-0">一番人気があるリスト</h2>
          <hr className="divider my-4" />
        </div>
          <div className="container-fluid p-0">
            <div className="row no-gutters">
            <Words_list 
              linkImg = {Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
            <Words_list 
              linkImg={Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
            <Words_list 
              linkImg={Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
             <Words_list 
              linkImg={Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
              <Words_list 
              linkImg={Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
              <Words_list 
              linkImg={Ico2}
              wordlistName="EN"
              wordlistCategory="Toeic 400~500点（語彙）"
            />
            </div>
          </div>
       </div>
    </div>
  )
}
export default Home