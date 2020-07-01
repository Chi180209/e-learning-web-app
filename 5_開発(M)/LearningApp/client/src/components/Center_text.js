import React from 'react';
import '../App.scss';

function Center_text(props) {
  return (
      <div id="Current_Best">
        <div className="container">
          <h2 className="text-center mt-0">{props.text}</h2>
          <hr className="divider my-4" />
        </div>
      </div>
  );
}

export default Center_text;
