import React from "react"
function Notes(props){
    return(
        <div className="noteBody">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )

}
export default Notes