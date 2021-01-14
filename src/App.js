import React from "react";
import Test from "./test";
import Plain from "./MediaCard";
import Hi from "./constfunc";
import Hello from "./arrow";
import MediaCard from './media'
import Gate from "./gate";

function App(){
  return (
  <div>
    <Test></Test>
    <Plain name = 'Sir'/>
    <hr></hr>
    <Hi />
    <hr></hr>
    <Hello></Hello>
    <hr></hr>
    <MediaCard title = 'Image from Dave' body = "Body" imageurl = "https://img.freepik.com/free-vector/hand-drawn-doodle-travelling-background_23-2148077764.jpg?size=338&ext=jpg" />
    <hr></hr> 
    <strong>
    <Gate isopen ="false" />
    </strong>
  </div>
    ); 
}

export default App;
