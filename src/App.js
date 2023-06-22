import React from "react";
import { useState } from "react";
import EditPersonal from "./components/editPersonal";
import ViewPersonal from "./components/viewPersonal";

function App() {

  const [person, setPerson] = useState({
    firstName: 'Your Name',
    lastName: '',
    profession: '',
    phoneNumber: '',
    email: '',
  })

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div >
      <EditPersonal onEditInfo={handleChange}/>
      <ViewPersonal firstName={person.firstName} lastName={person.lastName} profession={person.profession} phoneNumber={person.phoneNumber} email={person.email}/>
    </div>
  );
}

export default App;
