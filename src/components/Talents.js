import React from 'react'
import Talent from './Talent'

const Talents = (props) => {
    return(
        <div className="container">
            {props.talents.map((talent, index) => {
                console.log(talent.name);
                return <Talent img={talent.img} name={talent.name} key={props.index} talentClicked={props.talentClicked} />
            })}
        </div>
    )
};

export default Talents;