import React from "react";
import { useState } from "react";
import EditPersonal from "./components/editPersonal";
import ViewPersonal from "./components/viewPersonal";
import EditExperience from "./components/editExperience";
import ViewExperience from "./components/viewExperience";

function App() {

  const [person, setPerson] = useState({
    firstName: 'Your Name',
    lastName: '',
    profession: '',
    phoneNumber: '',
    email: '',
  })

  const [experiences, setExperiences] = useState({
    workExp: {
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
    },
    experienceList: [],
  })

  function handleExpChange(e) {
    setExperiences({
     ...experiences,
     workExp: {
      ...experiences.workExp,
      [e.target.name]: e.target.value
     }
    })
    console.log(e.target.value)
  }

  function onSubmitExperience(e) {
    e.preventDefault();
    const updatedExperienceList = [...experiences.experienceList, experiences.workExp];
    setExperiences((prevState) => ({
      ...prevState,
      experienceList: updatedExperienceList,
    }));
    console.log(updatedExperienceList);
  }

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div >
      <EditPersonal onEditInfo={handleChange}/>
      <EditExperience onExperienceSubmit={onSubmitExperience} onExperienceChange={handleExpChange}/>
      <ViewPersonal firstName={person.firstName} lastName={person.lastName} profession={person.profession} phoneNumber={person.phoneNumber} email={person.email}/>
      <ViewExperience experiences={experiences.experienceList}/>
    </div>
  );
}

export default App;
