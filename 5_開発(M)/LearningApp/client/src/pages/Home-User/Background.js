import React from 'react'
import {Link} from 'react-router-dom'

const Background = () => {
  return (
    <header className="masthead" id="home_masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
        
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">ベトナム人のeラーニングコミュニティへよこそ</h1>
            <hr className="divider my-4" />
          </div>

          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">将来、日本で就職する予定がある方、お仕事のため専門用語を学びたい方に向けるeラーニング</p>
              
            <Link to="../Login"><button className="btn-xl col-3 btn-danger"> ログイン </button></Link>
            <Link to="../Register"><button className="btn-xl col-3 btn-warning"> 登録 </button></Link>

          </div>
        
        </div>
      </div>
    </header>
  )
}

export default Background
