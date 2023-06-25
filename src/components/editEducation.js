import React from "react";

export default function EditEducation({onEducationSubmit, onEducationChange}) {
    return(
        <div className="editEducationComponent">
            <h2 className="PersonalTitile educationInfo">
                Education
            </h2>
            <form className="educationForm" onSubmit={onEducationSubmit}>
            <input required value={schoolName} onChange={onEducationChange} name="schoolName" className="eduactionInput schoolName" type='text' placeholder="School Name"/>
            <input required value={degree} onChange={onEducationChange} name="degree" className="educationInput degree" type='text' placeholder="Degree"/>
            <label className="startSchool fromLabel"> From: 
                <input required value={startSchool} onChange={onEducationChange} name="startSchool" className="educationInput startSchool" type='date'/>
            </label>
            <label className="endSchool fromLabel"> From: 
                <input required value={endSchool} onChange={onEducationChange} name="endSchool" className="educationInput endSchool" type='date'/>
            </label>
            <button className="addEducation" type="submit" >Add to CV</button>
            </form>
        </div>
    )
}