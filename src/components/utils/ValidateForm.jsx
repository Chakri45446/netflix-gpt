import React from 'react'

export const ValidateForm = (email, password , name) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
        email
    );
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
    )
    const isNameValid = /^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/.test(
        name
    )

    if(!isEmailValid) return "Email ID is not Valid"
    if(!isPasswordValid) return "Password is not Valid"
    if(!isNameValid) return "Full Name is not Valid "

    return null;
}
 