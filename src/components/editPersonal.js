import React from "react";
import { useState } from "react";

export default function EditPersonal({submitPersonal}) {
    return(
        <div>
            <h2 className="PersonalTitle PersonalInfo">
                Personal Information
            </h2>
            <form className="personalForm" onSubmit={submitPersonal}>
            <input className="personalInput firstName" type="text" placeholder="First Name" required/>
            <input className="personalInput lastName" type="text" placeholder="Last Name" required/>
            <input className="personalInput profession" type="text" placeholder="Profession" required/>
            <input className="personalInput phoneNumber" type="text" placeholder="Phone Number" required/>
            <input className="personalInput email" type="email" placeholder="e-mail" required/>
            <button type="submit" className="submitPersonal btn">Update Resume</button>
            </form>
        </div>
    )
}