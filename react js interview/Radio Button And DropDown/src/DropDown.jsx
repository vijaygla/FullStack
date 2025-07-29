import React, { useState } from 'react'

export const DropDown = () => {

    const [city, setCity] = useState("patna");

    const handleCity = (event) => { 
        setCity(event.target.value);
    }

    return (
        <>
            <h1>Select your city: {city}</h1>
            <select name="city" id="city" value={city} onChange={handleCity}>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
                <option value="patna">Patna</option>
            </select>
        </>
    )
}

