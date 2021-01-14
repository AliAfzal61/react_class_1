import React from "react";

function MediaCard(props) {
    return <center>
        <div>
            <h2>This is Title named {props.title}</h2>
            <p> This is a body in tag P according to dave {props.body} </p>
            <img alt = "Alternate text" src = {props.imageurl} />
        </div>
    </center>
    
}
export default MediaCard;