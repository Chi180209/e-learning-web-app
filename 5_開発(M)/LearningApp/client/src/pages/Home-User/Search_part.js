import React from 'react'

const Search_part = () => {  
  return (
    <div className="bg" style={{height: 24 + 'rem'}} id="search">
      <br/><br/>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">

            <h2 className="text-white mt-0">専門用語リスト検索</h2>
            <hr className="divider light my-4" />
            
            <p className="text-white-50 mb-4">キーワードを入力し、あなたに向ける一番適切なリストを探しましょう</p>
            <input type="text" className="form-control" id="search-list" placeholder="リスト名を入力して下さい"/> <br/>
            <button href="#services" className="btn-xl col-4 btn-white">検索</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search_part
