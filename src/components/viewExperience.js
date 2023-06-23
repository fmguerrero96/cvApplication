import React from "react";

export default function ViewExperience({experiences}) {
    return(
        <ul className="viewExperience">
            {experiences.map((exp => {
                <li className="experienceBlock">
                <div className="expItem companyName">{exp.workExp.companyName}</div>
                <div className="expIten position">{exp.workExp.position}</div>
                <div className="expIten startDate">{exp.workExp.startDate}</div>
                <div className="expIten endDate">{exp.workExp.endDate}</div>
            </li>
            }))}
        </ul>
    )
}

