import React from "react";

export default function EditExperience({companyName, position, startDate, endDate, onExperienceSubmit, onExperienceChange}) {
    return(
        <div className="editExperinceComponent">
            <h2 className="PersonalTitle experienceInfo">
                Work Experience
            </h2>
            <form className="experienceForm" onSubmit={onExperienceSubmit}>
                <input required value={companyName} onChange={onExperienceChange} name="companyName" className="experienceInput companyName" type='text' placeholder="Company name"/>
                <input required value={position} onChange={onExperienceChange} name="position" className="experienceInput position" type='text' placeholder="Position"/>
                <label className="fromLabel"> From: 
                    <input required value={startDate} onChange={onExperienceChange} name="startDate" className="experienceInput startDate" type='date'/>
                </label>
                <label className="toLabel">
                    To: 
                    <input required value={endDate} onChange={onExperienceChange} name="endDate" className="experienceInput endDate" type='date'/>
                </label>
                <button className="addExperience" type="submit" >Add to CV</button>
            </form>
        </div>
    )
}