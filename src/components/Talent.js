import React from 'react'


const Talent = (props) => {
    return(
        <div className="talent-section">
            <div className="introduction" onClick={() => props.talentClicked(props.name)}>
                <img src={props.img} />
                <p>{props.name}</p>
           </div>
        </div>
    )
}

export default Talent;