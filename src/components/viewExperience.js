import React from "react";

export default function ViewExperience({experiences, onDeleteExp}) {
    return(
        <div className="expTitle"> Work Experience
            <ul className="viewExperience">
                {experiences.map((exp) => (
                    <li key={exp.id} className="experienceBlock">
                        <div name='companyName' className="expItem companyName">Company: {exp.companyName}</div>
                        <div name='position' className="expIten position">Position: {exp.position}</div>
                        <div name='startDate' className="expIten startDate">From: {exp.startDate}</div>
                        <div name='endDate' className="expIten endDate">To: {exp.endDate}</div>
                        <button onClick={() => onDeleteExp(exp.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

