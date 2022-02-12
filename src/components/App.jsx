import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
