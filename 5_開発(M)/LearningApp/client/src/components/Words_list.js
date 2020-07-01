import React from 'react'

export default function Words_list(props) {
  // props.linkImg
  // props.wordlistName
  // props.wordlistCategory
  return (
    <div className=" col-lg-4 col-sm-6">
      <a className="Current_Best-box" href={props.linkImg}>
        <img className="img-fluid" src={props.linkImg} alt="" />
        <div className="Current_Best-box-caption">
          <div className="project-category text-white-50">{props.wordlistCategory}</div>
          <div className="project-name">{props.wordlistName}</div>
        </div>
      </a>
    </div>
  )
}
