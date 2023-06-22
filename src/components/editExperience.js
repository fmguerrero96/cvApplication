import React from "react";

export default function EditExperience({onExperienceSubmit}) {
    return(
        <div className="editExperinceComponent">
            <h2 className="PersonalTitile experienceInfo">
                Work Experience
            </h2>
            <form className="experienceForm" onSubmit={onExperienceSubmit}>
                <input className="experienceInput companyName" type='text' placeholder="Company name"/>
                <input className="experienceInput position" type='text' placeholder="Position"/>
                <label className="fromLabel"> From: 
                    <input className="experienceInput startDate" type='date'/>
                </label>
                <label className="toLabel">
                    To: 
                    <input className="experienceInput startDate" type='date'/>
                </label>
                <button className="addExperience" type="submit" >Add to CV</button>
            </form>
        </div>
    )
}