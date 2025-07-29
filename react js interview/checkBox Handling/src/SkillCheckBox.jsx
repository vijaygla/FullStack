import React, { useState } from 'react'

export const SkillCheckBox = () => {

    const [skill, setSkill] = useState([]);

    const handleSkill = (event) => {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setSkill([...skill, event.target.value]);
        }
        else {
            setSkill([...skill.filter((item) => item != event.target.value)]);
        }
    }

    return (
        <div>
            <input onChange={handleSkill} type="checkbox" id="java" value="java" />
            <label htmlFor="java">java</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="javascript" value="javascript" />
            <label htmlFor="javascript">java script</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="react" value="react" />
            <label htmlFor="react">React</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="node" value="node js" />
            <label htmlFor="node">Node js</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="express" value="express js" />
            <label htmlFor="express">Express js</label>
            <br />
        </div>
    )
}
