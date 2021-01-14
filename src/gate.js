import React from "react";

function Gate(props){
return <center><div>
    {props.isopen === "true"  ? "Gate Is Open" : "Gate is Closed"}
    </div></center>

}
export default Gate;