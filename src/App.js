import React from "react";
import { useState } from "react";
import EditPersonal from "./components/editPersonal";
import ViewPersonal from "./components/viewPersonal";
import EditExperience from "./components/editExperience";
import ViewExperience from "./components/viewExperience";
import EditEducation from "./components/editEducation";
import uniqid from "uniqid"

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
      id: uniqid()
    },
    experienceList: [],
  })

  const [educations, setEducations] = useState({
    schoolInfo: {
      schoolName: '',
      degree: '',
      startSchool: '',
      endSchool: '',
      id: uniqid(),
    },
    educationList : []
  })

  function handleExpChange(e) {
    setExperiences({
     ...experiences,
     workExp: {
      ...experiences.workExp,
      [e.target.name]: e.target.value
     }
    })
  }

  function handleEduChange(e) {
    setEducations({
      ...educations,
      schoolInfo: {
        ...educations.schoolInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  function onSubmitExperience(e) {
    e.preventDefault();
    const updatedExperienceList = [...experiences.experienceList, experiences.workExp];
    setExperiences((prevState) => ({
      ...prevState,
      experienceList: updatedExperienceList,
      workExp: {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      }
    }));
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
      <EditExperience companyName={experiences.workExp.companyName} position={experiences.workExp.position} startDate={experiences.workExp.startDate} endDate={experiences.workExp.endDate} onExperienceSubmit={onSubmitExperience} onExperienceChange={handleExpChange}/>
      <EditEducation onEducationChange={handleEduChange}/>
      <ViewPersonal firstName={person.firstName} lastName={person.lastName} profession={person.profession} phoneNumber={person.phoneNumber} email={person.email}/>
      <ViewExperience experiences={experiences.experienceList}/>
    </div>
  );
}

export default App;
