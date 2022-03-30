import React from 'react';
import './Card.css'



function Card (props) {

    return (
            <div class="card">
                {props.contentObj}
            </div>
    )

}
export default Card;