import React from 'react';

function List(props) {
  return (
        <div className="col-lg-4 col-sm-6">
          <a className="Current_Best-box" href="#"><img className="img-fluid" src={props.path} alt="" />
            <div className="Current_Best-box-caption">
              <div className="project-category text-white-50">{props.list_category}</div>
              <div className="project-name">{props.list_name}</div>
            </div></a>
        </div>
  );
}

export default List;
