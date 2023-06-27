import React from "react";

export default function EditPersonal({onEditInfo}) {
    return(
        <div className="editPersonalComponent">
            <h2 className="PersonalTitle PersonalInfo">
                Personal Information
            </h2>
            <form className="personalForm">
            <input onChange={onEditInfo} name="firstName" className="personalInput firstName" type="text" placeholder="First Name" required/>
            <input onChange={onEditInfo} name="lastName" className="personalInput lastName" type="text" placeholder="Last Name" required/>
            <input onChange={onEditInfo} name="profession" className="personalInput profession" type="text" placeholder="Profession" required/>
            <input onChange={onEditInfo} name="phoneNumber" className="personalInput phoneNumber" type="text" placeholder="Phone Number" required/>
            <input onChange={onEditInfo} name="email" className="personalInput email" type="email" placeholder="e-mail" required/>
            </form>
        </div>
    )
}