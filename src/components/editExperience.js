import React from "react";

export default function EditExperience({onExperienceSubmit, onExperienceChange}) {
    return(
        <div className="editExperinceComponent">
            <h2 className="PersonalTitile experienceInfo">
                Work Experience
            </h2>
            <form className="experienceForm" onSubmit={onExperienceSubmit}>
                <input onChange={onExperienceChange} name="companyName" className="experienceInput companyName" type='text' placeholder="Company name"/>
                <input onChange={onExperienceChange} name="position" className="experienceInput position" type='text' placeholder="Position"/>
                <label className="fromLabel"> From: 
                    <input onChange={onExperienceChange} name="startDate" className="experienceInput startDate" type='date'/>
                </label>
                <label className="toLabel">
                    To: 
                    <input onChange={onExperienceChange} name="endDate" className="experienceInput endDate" type='date'/>
                </label>
                <button className="addExperience" type="submit" >Add to CV</button>
            </form>
        </div>
    )
}