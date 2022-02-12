import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

//to me this is like the card template
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h4 className="">{props.id}</h4>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.img} />
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
