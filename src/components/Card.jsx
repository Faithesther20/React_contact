import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
          <Paragraph details={props.tel} />
          <Paragraph details={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
