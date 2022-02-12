import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
          <Detail detailinfo={props.tel} />
          <Detail detailinfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
