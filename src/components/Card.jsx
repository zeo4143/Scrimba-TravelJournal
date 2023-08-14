import React from "react";

export default function Cards(props) {

    return (

        <div className="card--flex">
                    
            <div className="image">
                <img src={`./images/${props.image}`} className="card--img"/>
            </div>

            <div className="content">
                <p><pre>{props.country}  <a href={`https://maps.google.com/maps?q=${props.place}`}>View on Gooogle Maps</a></pre></p>
                <h1>{props.place}</h1>
                <b>{props.duration}</b>
                <p>{props.description}</p>
            </div>
        
        </div>
        
        
    )
}