import React from 'react';
import bootstrap from 'bootstrap'
import './Card.css'



function Card (props) {

    return (
            <div className="forceGraphCard">
                {props.contentObj}
            </div>
    )

}
export default Card;