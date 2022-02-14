import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// this is where all the templates created are put to use based on my own understanding
function createContact(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contact Project</h1>
      <Avatar imgURL="https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/273024430_1567282730307213_3955377389652359229_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEJL-PHe1g6zKKn72HeucCzOJsoJ4Fp6Os4mygngWno6wnRfc_8cbXmtLTseI5hj9T2AVLjG04VZzKJad6j_sR1&_nc_ohc=eV8gZFxRgY0AX9cXhuE&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&oh=00_AT_6FAAuibt5l8Scn74oME0EVLLKQDi1FfeTXGYb6GRrOw&oe=620F44D3" />
      {contacts.map(createContact)};
      {/* /{ <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
