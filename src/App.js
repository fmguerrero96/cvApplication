import React from "react";
import { useState } from "react";
import EditPersonal from "./components/editPersonal";
import ViewPersonal from "./components/viewPersonal";
import EditExperience from "./components/editExperience";
import ViewExperience from "./components/viewExperience";
import EditEducation from "./components/editEducation";
import ViewEducation from "./components/viewEducation";
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

  function onSubmitEducation(e) {
    e.preventDefault()
    const updatedEducationList = [...educations.educationList, educations.schoolInfo]
    setEducations((prevState) => ({
      ...prevState,
      educationList: updatedEducationList,
      schoolInfo: {
        schoolName: '',
        degree: '',
        startSchool: '',
        endSchool: '',
        id: uniqid(),
      }
    }))
  }

  function handleDeleteExp(expId) {
    const newExperiences = experiences.experienceList.filter((exp) => exp.id !== expId);
    setExperiences((prevState) => ({
      ...prevState,
      experienceList: newExperiences,
    }));
  }

  function handleDeleteEdu(eduId) {
    const newEducations = educations.educationList.filter((edu) => edu.id !== eduId);
    setEducations((prevState) => ({
      ...prevState,
      educationList: newEducations
    }))
  }

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div >
      <div className="left">
        <EditPersonal onEditInfo={handleChange}/>
        <EditExperience companyName={experiences.workExp.companyName} position={experiences.workExp.position} startDate={experiences.workExp.startDate} endDate={experiences.workExp.endDate} onExperienceSubmit={onSubmitExperience} onExperienceChange={handleExpChange}/>
        <EditEducation schoolName={educations.schoolInfo.schoolName} degree={educations.schoolInfo.degree} startSchool={educations.schoolInfo.startSchool} endSchool={educations.schoolInfo.endSchool} onEducationChange={handleEduChange} onEducationSubmit={onSubmitEducation}/>
      </div>

      <div className="right">
        <ViewPersonal firstName={person.firstName} lastName={person.lastName} profession={person.profession} phoneNumber={person.phoneNumber} email={person.email}/>
        <ViewExperience onDeleteExp={handleDeleteExp} experiences={experiences.experienceList}/>
        <ViewEducation educations={educations.educationList} onDeleteEdu={handleDeleteEdu}/>
      </div>
      
    </div>
  );
}

export default App;
