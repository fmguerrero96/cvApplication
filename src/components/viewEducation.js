import React from "react";

export default function ViewEducation({educations, onDeleteEdu}) {
    return(
        <div className="eduTitle"> Education
            <ul className="viewEducation">
                {educations.map((edu) => (
                    <li key={edu.id} className="educationBlock">
                        <div name='schoolName' className="eduItem">School: {edu.schoolName}</div>
                        <div name='degree' className="eduIten">Degree: {edu.degree}</div>
                        <div name='startSchool' className="eduItem startSchool">From: {edu.startSchool}</div>
                        <div name='endSchool' className="eduItem endSchool">To: {edu.endSchool}</div>
                        <button onClick={() => onDeleteEdu(edu.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}