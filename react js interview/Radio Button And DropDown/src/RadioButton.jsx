import React, { useState } from 'react'

export const RadioButton = () => {

    const [gender, setGender] = useState("female");

    const handleGender = (event) => {
        setGender(event.target.value);
    }

    return (
        <>
            <h1>Select your gender: {gender}</h1>
            
            {/* name must be same other wise you can select the multiple gender */}
            <input type="radio" name="gender" id="male" value="Male" checked={gender === "Male"} onChange={handleGender}/>
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" value="Female" checked={gender === "Female"} onChange={handleGender}/>
            <label htmlFor="female">Female</label>

        </>
    )
}
