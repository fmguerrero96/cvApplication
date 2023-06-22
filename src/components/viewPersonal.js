import React from "react";

export default function ViewPersonal({firstName, lastName, email, phoneNumber, profession}) {
    return(
        <div className="viewPersonal">
            <div className="viewFullName">{firstName} {lastName}</div>
            <div className="viewContanctInfo">
                <div className="viewEmail">Email: {email}</div>
                <div className="viewPhoneNumber">Phone Number: {phoneNumber}</div>
                <div className="viewProfession">Profession: {profession}</div>
            </div>
        </div>
    )
}