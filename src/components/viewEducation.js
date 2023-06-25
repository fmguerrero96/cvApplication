import React from "react";

export default function ViewEducation({educations}) {
    return(
        <ul className="viewEducation">
            {educations.map((edu) => (
                <li key={edu.id} className="educationBlock">
                    <div name='schoolName' className="eduItem schoolName">School: {edu.schoolName}</div>
                    <div name='degree' className="eduIten degree">Degree: {edu.degree}</div>
                    <div name='startSchool' className="eduItem startSchool">From: {edu.startSchool}</div>
                    <div name='endSchool' className="eduItem endSchool">To: {edu.endSchool}</div>
            </li>
            ))}
        </ul>
    )
}