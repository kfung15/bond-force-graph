import React from 'react';
import './Card.css'



function Card (props) {

    return (
            <div class="card">
                <h1 class="card forceGraphCardHeader">Workspace</h1>
                {props.contentObj}
            </div>
    )

}
export default Card;